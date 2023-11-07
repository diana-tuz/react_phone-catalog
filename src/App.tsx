import {
  Route, Routes, HashRouter as Router,
} from 'react-router-dom';
import './App.scss';
import { Root } from './RootLayouts/RootLayuot';
import { HomePage } from './pages/HomePage/HomePage';
import { Tablets } from './pages/Tablets/Tablets';
import { Phones } from './pages/Phones/Phones';
import { Favourites } from './pages/Favourites/Favourites';
import { Cart } from './pages/Cart/Cart';
import { Accessories } from './pages/Accessories/Accessories';
import { InfoPage } from './pages/InfoPage/InfoPage';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<Phones />} />
        <Route path=":category/:itemId" element={<InfoPage />} />
        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </Router>
);
