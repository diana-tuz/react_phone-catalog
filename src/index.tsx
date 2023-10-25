import ReactDOM from 'react-dom';

import { App } from './App';
import { CartProvider } from './useContext/cartContext';
import { FavouritesProvider } from './useContext/favouriteContext';

ReactDOM.render(
  <CartProvider>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </CartProvider>,
  document.getElementById('root'),
);
