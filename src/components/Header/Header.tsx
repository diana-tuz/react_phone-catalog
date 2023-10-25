import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { Logo } from '../../assets/icons/Logo';
import { Heart } from '../../assets/icons/Heart';
import { ShBag } from '../../assets/icons/ShBag';

export const Header: React.FC = () => {
  return (
    <header className="header" id="home">
      <nav className="header___nav nav">
        <Link to="/" className="nav__logo">
          <Logo />
        </Link>
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
        <Link to="/favourites" className="header__icons">
          <Heart />
        </Link>
        <Link to="/cart" className="header__icons">
          <ShBag />
        </Link>
      </div>
    </header>
  );
};
