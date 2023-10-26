import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { Heart } from '../../assets/icons/Heart';
import { ShBag } from '../../assets/icons/ShBag';
import { BurgerMenu } from './BurgerMenu';

type Props = {
  isOpen: boolean;
  setIsOpen: (a: boolean)=> void
};
export const Header: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <header className="header" id="home">
      <Link to="/" className="nav__logo">
        connectopia
      </Link>
      <div className="header__content">
        <nav className="header___nav nav">
          <NavLink className="nav__link link" to="/">
            Home
          </NavLink>
          <NavLink className="nav__link link" to="/phones">
            Phones
          </NavLink>
          <NavLink className="nav__link link" to="/tablets">
            tablets
          </NavLink>
          <NavLink className="nav__link link" to="/accessories">
            accessories
          </NavLink>
        </nav>
        <div className="header__leftbar">
          <NavLink to="/favourites" className="header__icons link">
            <Heart />
          </NavLink>
          <NavLink to="/cart" className="header__icons link">
            <ShBag />
          </NavLink>
        </div>
      </div>
      <div className="header__burger">
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
