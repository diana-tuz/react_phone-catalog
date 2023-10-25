import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocaleStorage';
import { Googs } from '../types/Goods';

type FavouritesContextType = {
  favourites: Googs[],
  // favourites: string[],
  setFavourites: (product: Googs) => void,
};

export const FavouritesContext = React.createContext<FavouritesContextType>({
  favourites: [],
  setFavourites: () => { },
});

type Props = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, saveFavourites]
    = useLocalStorage<Googs[]>('favourites', []);

  const setFavourites = (product: Googs) => {
    const isFavourites = favourites
      .some(item => item.itemId === product.itemId);

    if (!isFavourites) {
      saveFavourites([...favourites, product]);
    } else {
      saveFavourites([...favourites]
        .filter(item => item.itemId !== product.itemId));
    }
  };

  return (
    <FavouritesContext.Provider value={{
      favourites,
      setFavourites,
    }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export function useFavouritesContext() {
  const favourites = useContext(FavouritesContext);

  return favourites;
}
