import './Price.scss';

type Props = {
  fullPrice: number,
  price: number,
};

export const Price: React.FC<Props> = ({ fullPrice, price }) => {
  const isDiscont = fullPrice < 750;

  return (
    isDiscont ? (
      <div className="price__block">
        <p className="text-h2">
          {`${price}$`}
        </p>
        <p className="price__discount">
          { `${fullPrice}$`}
        </p>
      </div>
    ) : (
      <div className="price__block">
        <p className="text-h2">
          {`${fullPrice}$`}
        </p>
      </div>
    )
  );
};
