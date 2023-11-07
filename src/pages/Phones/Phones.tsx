/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from "react";
import { Catalog } from "../../components/Catalog/Catalog";
import { getProducts } from "../../api/api";
import { Googs } from "../../types/Goods";
import { Crumbs } from "../../components/NavigationCrumbs/NavigationCrumbs";
import { Loader } from "../../components/Loader/Loader";
import { BackButton } from "../../components/BackButton/BackButton";

export const Phones: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="page-goods">
      {isLoading ? <Loader />
        : (
          <>
            <Crumbs
              title="Phones"
              link="/phones"
            />
            <BackButton />

            <Catalog
              isError={isError}
              listOfGoods={list}
              title="Phones"
            />
          </>
        )}
    </div>

  );
};
