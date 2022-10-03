import { useState } from 'react';

import { useGetProductQuery } from '@/services/api';

import styles from './styles.module.scss';

type Props = {
  id: string;
  imageUrl: string;
};

const ProductCard = ({ id, imageUrl }: Props): JSX.Element => {
  const [skip, setSkip] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const { data: product } = useGetProductQuery(id, { skip });

  const handleMouseEnter = (): void => {
    setSkip(false);
  };

  const handleClick = (): void => {
    setShowInfo(true);
  };

  const handleMouseLeave = (): void => {
    setShowInfo(false);
  };

  return (
    <div
      className={styles.productCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
      <img src={imageUrl} alt={'product cover'} />

      {showInfo && product && (
        <div className={styles.info}>
          <p>{product.product.name}</p>
          <p>{product.product.description}</p>
          <p>{product.product.price} PLN</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
