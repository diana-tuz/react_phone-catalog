import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Googs } from '../../types/Goods';
import './Category.scss';

type Props = {
  phones: Googs[]
  tablets: Googs[]
  acceessories: Googs[]
};

export const Category: React.FC<Props> = ({
  phones,
  tablets,
  acceessories,
}) => {
  const category = [
    {
      id: 0,
      params: '/phones',
      img: './img/category-phones.png',
      name: 'Mobile phones',
      amount: `${phones.length} models`,
    },
    {
      id: 1,
      params: '/tablets',
      img: './img/category-tablets.png',
      name: 'Tablets',
      amount: `${tablets.length} models`,
    },
    {
      id: 2,
      params: '/accessories',
      img: './img/category-accessories.png',
      name: 'Accessories',
      amount: `${acceessories.length} models`,
    },
  ];

  return (
    <section className="category mb">
      <h3 className="category__title text-h1">
        Shop by category
      </h3>
      <div className="category__block">
        {category.map(({
          id, name, img, amount, params,
        }) => {
          return (
            <div className="category-card" key={id}>
              <NavLink
                to={params}
                className="category-card__link"
              >
                <img src={img} alt={name} className="category-card__img" />
              </NavLink>
              <div className="category-card__info">
                <p className="category-card__title text-h3">
                  {name}
                </p>
                <p
                  className="category-card__text body-text-14"
                >
                  {amount}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
