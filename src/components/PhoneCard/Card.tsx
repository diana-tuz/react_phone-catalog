import React from 'react';
import classNames from 'classnames';

import { Googs } from '../../types/Goods';
import './card.scss';
import { Heart } from '../../assets/icons/Heart';
import { useFavouritesContext } from '../../useContext/favouriteContext';
import { CartItem, useCartContext } from '../../useContext/cartContext';

type Props = {
  image: string,
  name: string
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  ram: string
  id: string,
  phone: Googs,
};

export const PhoneCard: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  fullPrice,
  screen,
  capacity,
  ram,
  phone,
}) => {
  const { cart, addToCart, removeFromCart } = useCartContext();
  const { favourites, setFavourites } = useFavouritesContext();
  const isInCart = cart.some((item: CartItem) => item.product.id === id);

  const handleAddToCart = () => {
    if (!isInCart && phone) {
      addToCart(phone);
    }

    if (isInCart && phone) {
      removeFromCart(id);
    }
  };

  const isFavourites = favourites
    .some(item => item.id === id);
  const isDiscont = fullPrice < 750;

  return (
    <div className="card">
      <div className="card__img-part">
        <div style={{ backgroundImage: `url(${image})` }} className="card__img" />

        <p className="card__name body-text-14">
          {name}
        </p>
        {isDiscont ? (
          <div className="card__block-price">
            <p className="card__price text-h2">
              {`${price}$`}
            </p>
            <p className="card__discount">
              { `${fullPrice}$`}
            </p>
          </div>
        ) : (
          <div className="card__block-price">
            <p className="card__price text-h2">
              {`${fullPrice}$`}
            </p>
          </div>
        ) }
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
          {isInCart ? (
            <button
              type="button"
              className="card__button-add"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              className="card__button-added"
              onClick={handleAddToCart}
            >
              Added to cart
            </button>
          )}
          <button
            type="button"
            className={classNames('card__add-to', {
              card__added: isFavourites,
            })}
            onClick={() => setFavourites(phone)}
          >
            <Heart />
          </button>
        </div>
      </div>

    </div>
  );
};
