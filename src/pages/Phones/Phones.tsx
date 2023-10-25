/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from "react";
import { Catalog } from "../../components/Catalog/Catalog";
import { getProducts } from "../../api/api";
import { Googs } from "../../types/Goods";

export const Phones: React.FC = () => {
  const [list, setList] = useState<Googs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isloading, setisloading] = useState<boolean>(false);
  const data = async () => {
    try {
      setisloading(true);
      const res = await getProducts();

      setList(res);
      setisloading(false);
    } catch {
      setIsError(true);
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    data();
  }, []);
  // const sortedList = list.filter((item) => item.category === 'phones');

  return (
    <Catalog
      isError={isError}
      isLoading={isloading}
      listOfGoods={list}
      title="Phones"
      link="/phone"
    />
  );
};
