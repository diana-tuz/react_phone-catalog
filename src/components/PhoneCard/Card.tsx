import React from 'react';
import { Link } from 'react-router-dom';

import { Googs } from '../../types/Goods';
import './card.scss';
import { useGoodContext } from '../../useContext/cardContext';
import { ButtonsAddTo } from '../BottonsAddTo/ButtonsAddTo';
import { Price } from '../Price/Price';

type Props = {
  image: string,
  name: string
  fullPrice: number,
  price: number,
  phoneId: string,
  screen: string,
  capacity: string,
  ram: string
  id: string,
  phone: Googs,
};

export const PhoneCard: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  phoneId,
  fullPrice,
  screen,
  capacity,
  ram,
  phone,
}) => {
  const { addGood } = useGoodContext();

  return (

    <div className="card">
      <Link
        to={`phones/${phoneId}`}
        onClick={() => addGood(phoneId)}
      >
        <div className="card__img-part">
          <div style={{ backgroundImage: `url(${image})` }} className="card__img" />

          <p className="card__name body-text-14">
            {name}
          </p>
          <Price price={price} fullPrice={fullPrice} />
        </div>
        <div className="card__line" />

        <div className="card__charactirastic">
          <div className="card__screen">
            <p className="card__text small-text-12">Screen</p>
            <p className="card__info">{screen }</p>
          </div>
          <div className="card__screen">
            <p className="card__text small-text-12">Capacity</p>
            <p className="card__info">{capacity }</p>
          </div>
          <div className="card__screen">
            <p className="card__text small-text-12">RAM</p>
            <p className="card__info">{ram }</p>
          </div>
        </div>

      </Link>
      <ButtonsAddTo phone={phone} id={id} />

    </div>

  );
};
