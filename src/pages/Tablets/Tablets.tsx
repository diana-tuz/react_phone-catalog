import React, { useEffect, useState } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { getProducts } from '../../api/api';
import { Googs } from '../../types/Goods';

export const Tablets: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getProducts();

      setList(res);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedList = list.filter((item) => item.category === 'tablets');

  return (
    sortedList.length
      ? (
        <Catalog
          isError={isError}
          isLoading={isLoading}
          listOfGoods={sortedList}
          title="Tablets"
          link="/tablets"
        />
      )
      : (
        <div className="text-error">
          <h2 className="text-h1 ">
            We are working and will soon add a new categorys to our shop
          </h2>
        </div>

      )
  );
};
