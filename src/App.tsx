import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import './App.scss';
import { Root } from './RootLayouts/RootLayuot';
import { HomePage } from './pages/HomePage/HomePage';
import { Tablets } from './pages/Tablets/Tablets';
import { Phones } from './pages/Phones/Phones';
import { Favourites } from './pages/Favourites/Favourites';
import { Cart } from './pages/Cart/Cart';
import { Accessories } from './pages/Accessories/Accessories';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path='/error' element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
