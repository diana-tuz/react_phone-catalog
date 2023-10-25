/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { HomeCatalog } from '../../components/HomeCatalog/HomeCatalog';
import { Googs } from '../../types/Goods';

import { getProducts } from '../../api/api';
import { Category } from '../../components/Category/Category';

export const HomePage: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const data = async () => {
    try {
      setIsLoading(true);
      const res = await getProducts();

      setList(res);
      setIsLoading(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const tabletsList = list.filter((item) => item.category === 'tablets');
  const accessoriesList = list.filter(
    (item) => item.category === 'accessories',
  );

  useEffect(() => {
    data();
  }, []);
  const newList = list.filter((phone) => phone.year >= 2019);
  const hotPricesList = list.filter((phone) => phone.price < 600);

  return (
    <>
      <Hero />
      <HomeCatalog
        list={hotPricesList}
        isError={isError}
        isLoading={isloading}
        title="Hot prices"
        cardType="PhoneCard"
      />
      <Category
        phones={list}
        tablets={tabletsList}
        acceessories={accessoriesList}
      />
      <HomeCatalog
        list={newList}
        isError={isError}
        isLoading={isloading}
        title="Brand new models"
        cardType="PhoneCardFull"
      />
    </>
  );
};
