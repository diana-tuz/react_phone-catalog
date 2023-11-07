import { NavLink } from 'react-router-dom';
import './NavigationCrumbs.scss';
import { IoIosHome } from '@react-icons/all-files/io/IoIosHome';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';

type Props = {
  link: string,
  title: string,
  item?: string,
};

export const Crumbs: React.FC<Props> = ({ link, title, item }) => {
  return (
    <div className="navigation">
      <NavLink to="/" className="navigation__link">
        <IoIosHome />
      </NavLink>
      <IoIosArrowForward />
      <NavLink
        to={link}
        className="navigation__link navigation__link-title small-text-12"
      >
        {title}
      </NavLink>
      {item && (
        <>
          <IoIosArrowForward />
          <NavLink
            to={item}
            className="navigation__link small-text-12"
          >
            {item}
          </NavLink>
        </>
      )}
    </div>
  );
};
