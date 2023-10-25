import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Googs } from '../../types/Goods';
import { getProducts } from '../../api/api';
import { PhoneCard } from '../../components/PhoneCard/Card';
import { RootState } from '../../redux/store';
import './Favourites.scss';
import { add } from '../../redux/favouriteSlice';

export const Favourites: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [favoriteGoods, setFavoriteGoods] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const data = async () => {
    try {
      setIsLoading(true);
      const res = await getProducts();

      setList(res);
      setIsLoading(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');

    if (storedFavourites) {
      const parsedFavourites = JSON.parse(storedFavourites);

      dispatch(add(parsedFavourites));
    }
  }, [dispatch]);

  useEffect(() => {
    data();

    const favoriteProducts = list.filter(
      (product) => favourite.includes(product.id),
    );

    setFavoriteGoods(favoriteProducts);
  }, [favourite, list]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourite));
  }, [favourite]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <section className="favourites mb">
      <h2 className="text-h1">
        Favourites
      </h2>
      <p className="favourites__amount ">
        {`${favourite.length} items`}
      </p>
      <div className="favourites__list small-text-12">
        {favoriteGoods.map((phone: Googs) => {
          const {
            image,
            name,
            price,
            fullPrice,
            screen,
            capacity,
            ram,
            id,
          } = phone;

          return (
            <PhoneCard
              image={image}
              name={name}
              price={price}
              fullPrice={fullPrice}
              screen={screen}
              capacity={capacity}
              ram={ram}
              id={id}
              key={id}
            />
          );
        })}
      </div>

    </section>
  );
};
