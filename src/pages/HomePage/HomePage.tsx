/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { HomeCatalog } from '../../components/HomeCatalog/HomeCatalog';
import { Googs } from '../../types/Goods';

import { getProducts, getProductsByCategory } from '../../api/api';
import { Category } from '../../components/Category/Category';
import { Loader } from '../../components/Loader/Loader';

export const HomePage: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [phones, setPhones] = useState<Googs[]>([]);
  const [tablets, setTablets] = useState<Googs[]>([]);
  const [accsessories, setAccsessories] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const data = async () => {
    try {
      setIsLoading(true);
      const res = await getProducts();
      const phonesData = await getProductsByCategory('phones');
      const accseessoriesData = await getProductsByCategory('accseessories');
      const tabletsData = await getProductsByCategory('tablets');

      setList(res);
      setPhones(phonesData);
      setAccsessories(accseessoriesData);
      setTablets(tabletsData);
      setIsLoading(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    data();
  }, []);
  const newList = list.filter((phone) => phone.year >= 2019);
  const hotPricesList = list.filter((phone) => phone.fullPrice < 750);

  return (
    <main className="page-goods">
      {isLoading ? <Loader />
        : (
          <>
            <Hero />
            <HomeCatalog
              list={hotPricesList}
              isError={isError}
              title="Hot prices"
            />
            <Category
              phones={phones}
              tablets={tablets}
              acceessories={accsessories}
            />
            <HomeCatalog
              list={newList}
              isError={isError}
              title="Brand new models"
            />
          </>
        )}
    </main>

  );
};
