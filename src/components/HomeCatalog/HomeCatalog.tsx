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
  const [amount, setAmount] = useState<number>(4);
  const [end, setEnd] = useState<number>(amount);

  useEffect(() => {
    setCurrentList(list.slice(start, end));
  }, [start, end, list]);

  const handleTabsNext = () => {
    let newStart = start + amount;
    let newEnd = end + amount;

    if (newEnd > list.length) {
      newStart = 0;
      newEnd = amount;
    }

    setStart(newStart);
    setEnd(newEnd);
  };

  const handleTabsPrev = () => {
    let newStart = start - amount;
    let newEnd = end - amount;

    if (newStart < 0) {
      newStart = list.length - amount;
      newEnd = list.length;
    }

    setStart(newStart);
    setEnd(newEnd);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setAmount(1);
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        setAmount(2);
      } else {
        setAmount(amount);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
              phoneId,
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
                  phoneId={phoneId}
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
