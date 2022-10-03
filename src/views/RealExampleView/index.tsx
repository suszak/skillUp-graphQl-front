import classnames from 'classnames';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import CustomLink from '@/components/CustomLink';
import { useGetAllProductsImagesQuery } from '@/services/api';
import styles from '@/views/FetchExampleView/styles.module.scss';
import ProductCard from '@/views/RealExampleView/components/ProductCard';

import inputStyles from './styles.module.scss';

const RealExampleView = (): JSX.Element => {
  const [sort, setSort] = useState<'' | 'price_ASC' | 'price_DESC'>('');
  const [filter, setFilter] = useState<string>('');
  const [requestOptions, setRequestOptions] = useState('');
  const { data: productsImages, isLoading: isProductsImagesLoading } = useGetAllProductsImagesQuery(
    { requestOptions }
  );

  useEffect(() => {
    if (sort && filter) {
      setRequestOptions(`(orderBy: ${sort}, filter: {name: {matches: {pattern: "${filter}"}}})`);
      return;
    }

    if (sort) {
      setRequestOptions(`(orderBy: ${sort})`);
      return;
    }

    if (filter) {
      setRequestOptions(`(filter: {name: {matches: {pattern: "${filter}"}}})`);
      return;
    }

    setRequestOptions('');
  }, [sort, filter]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value);
  };

  const toggleSorting = (): void => {
    switch (sort) {
      case '':
        setSort('price_ASC');
        break;
      case 'price_ASC':
        setSort('price_DESC');
        break;
      case 'price_DESC':
        setSort('');
        break;
    }
  };

  return (
    <div className={styles.fetchExample}>
      <h1>Praktyczne zastosowanie:</h1>
      <h2>Galeria produktów:</h2>

      <div className={inputStyles.filters}>
        <div className={inputStyles.inputWrapper}>
          <span>Nazwa:</span>
          <input className={inputStyles.input} type={'text'} onChange={handleFilterChange} />
        </div>

        <div className={inputStyles.inputWrapper} onClick={toggleSorting}>
          <span>Cena</span>
          {sort ? (
            <div
              className={classnames([
                inputStyles.arrow,
                sort === 'price_DESC' ? inputStyles.arrowRotated : undefined,
              ])}>
              <Arrow />
            </div>
          ) : (
            <div className={inputStyles.dash} />
          )}
        </div>
      </div>

      {isProductsImagesLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className={styles.productsGallery}>
          {productsImages?.allProducts.map(product => (
            <React.Fragment key={product.id}>
              <ProductCard id={product.id} imageUrl={product.photo.url} />
            </React.Fragment>
          ))}
        </div>
      )}

      <CustomLink to={'/outro'} content={'Koniec'} />
    </div>
  );
};

export default RealExampleView;
