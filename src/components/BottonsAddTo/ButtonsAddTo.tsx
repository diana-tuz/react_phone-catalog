import classNames from 'classnames';
import { Heart } from '../../assets/icons/Heart';
import { CartItem, useCartContext } from '../../useContext/cartContext';
import { useFavouritesContext } from '../../useContext/favouriteContext';
import { Googs } from '../../types/Goods';

type Props = {
  phone: Googs,
  id: string,
};
export const ButtonsAddTo: React.FC<Props> = ({ phone, id }) => {
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

  return (
    <div className="card__buttons">
      {!isInCart ? (
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
  );
};
