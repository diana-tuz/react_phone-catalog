import React from 'react';
import { Googs } from '../../types/Goods';
import { PhoneCard } from '../../components/PhoneCard/Card';
import './Favourites.scss';
import { useFavouritesContext } from '../../useContext/favouriteContext';
import { Crumbs } from '../../components/NavigationCrumbs/NavigationCrumbs';
import { BackButton } from '../../components/BackButton/BackButton';

export const Favourites: React.FC = () => {
  const { favourites } = useFavouritesContext();

  return (
    <section className="favourites mb">
      <Crumbs title="Favourites" link="/favourites" />
      <BackButton />
      <h2 className="text-h1">
        Favourites
      </h2>
      <p className="favourites__amount small-text-12">
        {`${favourites.length} items`}
      </p>
      <div className="favourites__list ">
        {favourites.map((phone: Googs) => {
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
              phone={phone}
            />
          );
        })}
      </div>
    </section>
  );
};
