/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from "react";
import './Catalog.scss';
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosHome } from "@react-icons/all-files/io/IoIosHome";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Googs } from "../../types/Goods";
import { PhoneCardFull } from "../PhoneCard/PhoneCardFull";

type Props = {
  title: string,
  listOfGoods: Googs[],
  isError: boolean,
  isLoading: boolean,
  link: string,
};

export const Catalog: React.FC<Props> = ({
  title,
  listOfGoods,
  isLoading,
  isError,
  link,
}) => {
  type Category = 'Newest' | 'Alphabetically' | 'Cheapest' | 'Default';
  const [amount, setAmount] = useState<number>(4);
  const [currentList, setCurrentList] = useState<Googs[]>(listOfGoods);
  const [preparedList, setPreparedList] = useState<Googs[]>(listOfGoods);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(4);

  const [sortBy, setSortBy] = useState<Category>('Newest');

  const [pagesQuantity, setPagesQuantity] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setSortBy('Default');
  }, []);

  useEffect(() => {
    let sortedList = [...listOfGoods];

    if (sortBy === 'Default') {
      setPreparedList(sortedList);
    }

    if (sortBy === 'Newest') {
      sortedList = sortedList.sort((item1, item2) => item1.year - item2.year);
    } else if (sortBy === 'Cheapest') {
      sortedList = sortedList.sort(
        (item1, item2) => item1.fullPrice - item2.fullPrice,
      );
    } else if (sortBy === 'Alphabetically') {
      sortedList = sortedList.sort(
        (item1, item2) => item1.name.localeCompare(item2.name),
      );
    }

    setPreparedList(sortedList);
  }, [sortBy]);

  useEffect(() => {
    setPagesQuantity(Math.ceil(listOfGoods.length / amount));
  }, [amount, listOfGoods]);

  useEffect(() => {
    const newStart = (currentPage - 1) * amount;
    const newEnd = newStart + amount;

    setStart(newStart);
    setEnd(newEnd);
  }, [currentPage, amount]);

  const pagesArray = Array.from({ length: pagesQuantity }, (_, i) => i + 1);
  const category: Category[] = [
    'Default', 'Newest', 'Alphabetically', 'Cheapest',
  ];
  const quantity: number[] = [4, 8, 16];

  const handleTabsNext = () => {
    let newStart = start + amount;
    let newEnd = end + amount;

    if (newEnd > preparedList.length) {
      newStart = 0;
      newEnd = amount;
    }

    setStart(newStart);
    setEnd(newEnd);
    setCurrentPage(currentPage + 1);
  };

  const handleTabsPrev = () => {
    let newStart = start - amount;
    let newEnd = end - amount;

    if (newStart < 0) {
      newStart = preparedList.length - amount;
      newEnd = preparedList.length;
    }

    setStart(newStart);
    setEnd(newEnd);
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentList(preparedList.slice(start, end));
  }, [start, end, preparedList]);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setPreparedList(listOfGoods);
    setCurrentList(listOfGoods.slice(start, end));

    setPagesQuantity(Math.ceil(listOfGoods.length / amount));
  }, [listOfGoods, amount, start, end]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <section className="catalog mb">
      <div className="catalog__navigation">
        <NavLink to="/" className="catalog__navigation-link">
          <IoIosHome />
        </NavLink>
        <IoIosArrowForward />
        <NavLink
          to={link}
          className="catalog__navigation-link"
        >
          {title}
        </NavLink>
      </div>
      <h2 className="catalog__title  text-h1">
        {title}
      </h2>
      <p className="catalog__info body-text-14">
        {`${listOfGoods.length} models`}
      </p>
      <div className="catalog__settings">
        <div className="catalog__select">
          <p className="small-text-12">Sort by</p>
          <select
            className="catalog__sortBy"
            onChange={(e) => setSortBy(e.target.value as Category)}
          >
            {category.map((item) => {
              return (
                <option
                  key={item}
                  value={item}

                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="catalog__select ">
          <p className="small-text-12">Items on page</p>
          <select
            className="catalog__quantity"
            onChange={(e) => setAmount(+e.target.value as number)}
          >
            {quantity.map((item) => {
              return (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>

        </div>
      </div>

      <div className="catalog__goods ">
        {currentList.map((phone: Googs) => {
          const {
            image,
            name,
            fullPrice,
            screen,
            capacity,
            ram,
            id,
          } = phone;

          return (
            <PhoneCardFull
              image={image}
              name={name}
              fullPrice={fullPrice}
              screen={screen}
              capacity={capacity}
              ram={ram}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <div className="catalog__tabs">
        <div className="button">
          <button
            type="button"
            className="button__prev"
            onClick={handleTabsPrev}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          {pagesArray.map((number: number) => {
            return (
              <button
                type="button"
                className={classNames(
                  'button__tab',
                  { 'button__tab--active': currentPage === number },
                )}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </button>
            );
          })}
          <button
            type="button"
            className="button__next"
            onClick={handleTabsNext}
            disabled={currentPage === pagesQuantity}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};
