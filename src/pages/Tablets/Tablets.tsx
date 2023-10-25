import React, { useEffect, useState } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { getProductsByCategory } from '../../api/api';
import { Googs } from '../../types/Goods';
import { Crumbs } from '../../components/NavigationCrumbs/NavigationCrumbs';
import { Loader } from '../../components/Loader/Loader';
import { BackButton } from '../../components/BackButton/BackButton';

export const Tablets: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getProductsByCategory('tablets');

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

  return (
    <div className="page-goods">

      {isLoading
        ? <Loader />
        : (
          <>
            <Crumbs link="/tablets" title="Tablets" />
            <BackButton />

            {list.length ? (
              <Catalog
                isError={isError}
                listOfGoods={list}
                title="Tablets"

              />
            )
              : (
                <div className="text-error">
                  <h2 className="text-h1 ">
                    We are working and will soon add a new categorys to our shop
                  </h2>
                </div>
              )}
          </>
        )}
    </div>
  );
};
