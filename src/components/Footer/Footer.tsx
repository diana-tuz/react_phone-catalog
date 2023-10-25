import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { Logo } from '../../assets/icons/Logo';
import './Footer.scss';

export const Footer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToTarget = (target: any) => {
    const scrollTo = document.querySelector(target);

    scrollTo.scrollIntoView({ block: 'end' });
  };

  return (
    <footer className=" footer ">
      <div className="footer__container container">
        <Link to="/" className="footer__logo">
          <Logo />
        </Link>
        <div className="footer__navigation">
          <NavLink
            className="footer__link link"
            to="https://github.com/diana-tuz"
          >
            GitHub
          </NavLink>
          <NavLink
            className="footer__link link"
            to="https://github.com/diana-tuz"
          >
            Contacts
          </NavLink>
          <NavLink
            className="footer__link link"
            to="https://github.com/diana-tuz"
          >
            Rights
          </NavLink>
        </div>
        <button
          type="button"
          className="footer__btn"
          onClick={() => scrollToTarget('#home')}
        >
          <span className="footer__btn-link">Back to top</span>
          <span className="footer__btn-up button__up">
            <IoIosArrowUp />
          </span>
        </button>
      </div>

    </footer>
  );
};
