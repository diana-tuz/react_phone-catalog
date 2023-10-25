import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocaleStorage';
import { Googs } from '../types/Goods';

export type CartItem = {
  id: number,
  quantity: number,
  product: Googs,
};

type CartContextType = {
  cart: CartItem[],
  addToCart: (newGoogs: Googs) => void,
  removeFromCart: (productId: string) => void,
  changeQuantity: (productId: string, action: Action) => void,
};

export enum Action {
  inc,
  desc,
}

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  changeQuantity: () => { },
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);

  const changeQuantity = (productId: string, action: Action) => {
    const newCart = cart.map((item: CartItem) => {
      if (item.product.id === productId) {
        switch (action) {
          case Action.inc:
            return { ...item, quantity: item.quantity + 1 };

          case Action.desc:
            return { ...item, quantity: item.quantity - 1 };

          default:
            return item;
        }
      }

      return item;
    });

    setCart(newCart);
  };

  const addToCart = (newGoogs: Googs) => {
    const isInCart = cart.some(
      (item: CartItem) => item.product.id === newGoogs.id,
    );

    if (!isInCart) {
      setCart([
        ...cart,
        {
          id: cart.length + 1,
          quantity: 1,
          product: newGoogs,
        },
      ]);
    } else {
      changeQuantity(newGoogs.id, Action.inc);
    }
  };

  const removeFromCart = (productId: string) => setCart(
    cart.filter((item: CartItem) => item.product.id !== productId),
  );

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      changeQuantity,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const cart = useContext(CartContext);

  return cart;
}
