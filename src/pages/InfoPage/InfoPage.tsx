import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { getDescription, getProducts } from '../../api/api';
import { PhoneInfo } from '../../types/PhoneInfo';
import { Loader } from '../../components/Loader/Loader';
import { Crumbs } from '../../components/NavigationCrumbs/NavigationCrumbs';
import { BackButton } from '../../components/BackButton/BackButton';
import { Googs } from '../../types/Goods';
import { HomeCatalog } from '../../components/HomeCatalog/HomeCatalog';
import { Price } from '../../components/Price/Price';
import { ButtonsAddTo } from '../../components/BottonsAddTo/ButtonsAddTo';
import './InfoPage.scss';

export const InfoPage: React.FC = () => {
  const { itemId } = useParams();

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<PhoneInfo | null>(null);

  const [list, setList] = useState<Googs[]>();
  const [mainImg, setMainImg] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    getProducts()
      .then(setList);

    getDescription(itemId as string)
      .then((response) => {
        setProduct(response);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  const item = product as PhoneInfo;
  const phone = list && list.find((p) => p.itemId === itemId);
  const links: string[] = [];

  if (item) {
    item.colorsAvailable.forEach((color: string) => {
      const findedPhone: Googs | undefined = list?.find(
        (element) => element.itemId.includes(item.namespaceId)
        && color === item.color,
      );

      links.push(findedPhone?.name as string);
    });
  }

  console.log(item.colorsAvailable);

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <section className="info">
      { isLoading && <Loader />}
      { (item !== null && !isLoading)
        ? (
          <>
            <Crumbs
              title={phone?.category as string}
              item={phone?.name as string}
              link={`/${phone?.category}`}
            />
            <BackButton />
            <h2 className="h1">
              {item.name}
            </h2>
            <div className="info__images">
              <div className="info__prev">
                <div className="info__btns">
                  {item.images.map((img: string) => {
                    return (
                      <button
                        type="button"
                        className="info__prev--btn"
                        onClick={() => setMainImg(img)}
                      >
                        <img
                          key={img}
                          src={img}
                          alt={img}
                          className="info__prev--img"
                        />
                      </button>
                    );
                  })}
                </div>

                <img
                  src={mainImg || product?.images[0]}
                  alt={mainImg}
                  className="info__prev--mainImg"
                />
              </div>
              <div className="info__right">
                <div className="">
                  <p className="small-text-12">Available colors</p>
                  <div className="info__buttons">
                    {item.colorsAvailable.map(
                      (itemColor: string, index: number) => {
                        return (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                          <Link
                            to={links[index]}
                            key={itemColor}
                            style={{ backgroundColor: itemColor }}
                            className={classNames(
                              'info__color',
                              {
                                'info__color--active': item.color === itemColor,
                              },
                            )}
                          />
                        );
                      },
                    )}
                  </div>
                  <div className="info__line" />
                </div>
                <div className="info__buttons ">
                  <p className="small-text-12">Select capacity</p>
                  {item.capacityAvailable.map((itemCapacity) => {
                    return (
                      <button
                        key={itemCapacity}
                        type="button"
                        className={classNames(
                          'info__capacity',
                          {
                            'info__capacity--active': item.capacity
                              === itemCapacity,
                          },
                        )}
                      >
                        {itemCapacity}
                      </button>
                    );
                  })}
                </div>

                <div className="info__line" />

                <Price
                  price={item.priceDiscount}
                  fullPrice={item.priceRegular}
                />

                <ButtonsAddTo id={itemId as string} phone={phone as Googs} />
                <div className="info__charactirastic">
                  <div className="info__screen">
                    <p className="info__text small-text-12">Screen</p>
                    <p className="info__details">{item.screen}</p>
                  </div>
                  <div className="info__screen">
                    <p className="info__text small-text-12">Resolution</p>
                    <p className="info__details">{item.resolution}</p>
                  </div>
                  <div className="info__screen">
                    <p className="info__text small-text-12">Processor</p>
                    <p className="info__details">{item.processor}</p>
                  </div>
                  <div className="info__screen">
                    <p className="info__text small-text-12">RAM</p>
                    <p className="info__details">{item.ram}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info__about">
              <div className="info__description">
                {item.description.map(({ title, text }) => {
                  return (
                    <div
                      className="info__about--section"
                      key={title}
                    >
                      <h3 className="info__about--title">
                        {title}
                      </h3>
                      <p className="info__about--text">
                        {text}
                      </p>
                    </div>
                  );
                })}

              </div>

              <div className="info__tech">
                <div className="info__screen">
                  <p className="info__text small-text-12">Screen</p>
                  <p className="info__details">{item.screen}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Resolution</p>
                  <p className="info__details">{item.resolution}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Processor</p>
                  <p className="info__details">{item.processor}</p>
                </div>

                <div className="info__screen">
                  <p className="info__text small-text-12">RAM</p>
                  <p className="info__details">{item.ram}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Built in memory</p>
                  <p className="info__details">{item.capacity}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Camera</p>
                  <p className="info__details">{item.camera}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Zoom</p>
                  <p className="info__details">{item.zoom}</p>
                </div>
                <div className="info__screen">
                  <p className="info__text small-text-12">Cell</p>
                  <div className="info__cell">
                    {item.cell.map((cells) => {
                      return (
                        <p className="info__details">{cells}</p>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
            <HomeCatalog
              isError={isError}
              list={list as Googs[]}
              title="You may also like"
            />
          </>
        ) : <p>Item is not found</p>}
    </section>
  );
};
