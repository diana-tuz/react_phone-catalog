import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Goods } from '../../types/Goods';
import './card.scss';
import { Heart } from '../../assets/icons/Heart';
import { add, remove } from '../../redux/favouriteSlice';
import { RootState } from '../../redux/store';

export const PhoneCard: React.FC<Goods> = ({
  id,
  image,
  name,
  price,
  fullPrice,
  screen,
  capacity,
  ram,
}) => {
  const dispatch = useDispatch();
  const addToFavourites = (e: string) => {
    dispatch(add(e as string));
  };

  const handleRemoveFromFavourites = (productId: string) => {
    dispatch(remove(productId as string));
  };

  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );
  const toggleFavourite = (el: string) => {
    if (favourite.includes(el)) {
      handleRemoveFromFavourites(el);
    } else {
      addToFavourites(el);
    }
  };

  return (
    <div className="card">
      <div className="card__img-part">
        <div style={{ backgroundImage: `url(${image})` }} className="card__img" />

        <p className="card__name body-text-14">
          {name}
        </p>
        <div className="card__block-price">
          <p className="card__price text-h2">
            {`${price}$`}
          </p>
          <p className="card__discount">
            { `${fullPrice}$`}
          </p>
        </div>
      </div>
      <div className="card__line" />
      <div className="card__info-part">
        <div className="card__charactirastic">
          <div className="card__screen">
            <p className="card__text small-text-12">Screen</p>
            <p className="card__info">{screen }</p>
          </div>
          <div className="card__screen">
            <p className="card__text small-text-12">Capacity</p>
            <p className="card__info">{capacity }</p>
          </div>
          <div className="card__screen">
            <p className="card__text small-text-12">RAM</p>
            <p className="card__info">{ram }</p>
          </div>
        </div>
        <div className="card__buttons">
          <button
            type="button"
            className="card__button-add"
          >
            Add to cart
          </button>
          <button
            type="button"
            className={classNames('card__add-to', {
              card__added: favourite.includes(id as string),
            })}
            onClick={() => toggleFavourite(id as string)}
          >
            <Heart />
          </button>
        </div>
      </div>

    </div>
  );
};
