import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from '@react-icons/all-files/hi/HiOutlineMenuAlt1';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';
import { Heart } from '../../assets/icons/Heart';
import { ShBag } from '../../assets/icons/ShBag';
import './BurgerMenu.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: (a: boolean)=> void
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    isOpen
      ? (
        <section className="menu" id="home">
          <div className="menu__head">
            <nav className="menu__nav">
              <NavLink
                className="menu__link link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="menu__link link"
                to="/phones"
                onClick={() => setIsOpen(false)}
              >
                Phones
              </NavLink>
              <NavLink
                className="menu__link link"
                to="/tablets"
                onClick={() => setIsOpen(false)}
              >
                tablets
              </NavLink>
              <NavLink
                className="menu__link link"
                to="/accessories"
                onClick={() => setIsOpen(false)}
              >
                accessories
              </NavLink>
            </nav>
            <button
              type="button"
              className="menu__close"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>

          <div className="menu__block">
            <NavLink
              to="/favourites"
              className="header__icons link"
              onClick={() => setIsOpen(false)}
            >
              <Heart />
            </NavLink>
            <NavLink
              to="/cart"
              className="header__icons link"
              onClick={() => setIsOpen(false)}
            >
              <ShBag />
            </NavLink>
          </div>
        </section>
      ) : (
        <button
          className="menu__button"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineMenuAlt1 />
        </button>
      )
  );
};
