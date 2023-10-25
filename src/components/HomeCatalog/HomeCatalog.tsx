import React, { useState, useEffect } from 'react';
import './HomeCatalog.scss';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import { PhoneCard } from '../PhoneCard/Card';
import { Googs } from '../../types/Goods';

type Props = {
  list: Googs[],
  isError: boolean,
  title: string,
};

export const HomeCatalog: React.FC<Props> = ({
  list,
  isError,
  title,
}) => {
  const [currentList, setCurrentList] = useState<Googs[]>([]);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(4);

  useEffect(() => {
    setCurrentList(list.slice(start, end));
  }, [start, end, list]);

  const handleTabsNext = () => {
    let newStart = start + 4;
    let newEnd = end + 4;

    if (newEnd > list.length) {
      newStart = 0;
      newEnd = 4;
    }

    setStart(newStart);
    setEnd(newEnd);
  };

  const handleTabsPrev = () => {
    let newStart = start - 4;
    let newEnd = end - 4;

    if (newStart < 0) {
      newStart = list.length - 4;
      newEnd = list.length;
    }

    setStart(newStart);
    setEnd(newEnd);
  };

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <section className="homeCatalog mb">
      <div className="homeCatalog__head">
        <h2 className="homeCatalog__title">{title}</h2>
        <div className="homeCatalog__button button">
          <button
            type="button"
            className="button__prev"
            onClick={handleTabsPrev}
          >
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            className="button__next"
            onClick={handleTabsNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="homeCatalog__block">
        <ul className="homeCatalog__list">
          {currentList.map((phone: Googs) => {
            const {
              image,
              name,
              price,
              fullPrice,
              screen,
              capacity,
              ram,
              id,
            } = phone;

            return (
              <li className="homeCatalog__item" key={id}>
                <PhoneCard
                  image={image}
                  name={name}
                  price={price}
                  fullPrice={fullPrice}
                  screen={screen}
                  capacity={capacity}
                  ram={ram}
                  id={id}
                  key={id}
                  phone={phone}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
