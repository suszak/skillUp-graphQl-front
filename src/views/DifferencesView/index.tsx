import classnames from 'classnames';
import { useState } from 'react';

import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { ReactComponent as GraphQLLogo } from '@/assets/graphql-logo.svg';
import { ReactComponent as RESTLogo } from '@/assets/rest-api-icon.svg';
import CustomLink from '@/components/CustomLink';

import styles from './styles.module.scss';

const DifferencesView = (): JSX.Element => {
  const [openSections, setOpenSections] = useState<boolean[]>([false, false]);

  const toggleSection = (sectionIndex: number): void => {
    setOpenSections(prev => [
      ...prev.map((_, idx) => (sectionIndex === idx ? !prev[sectionIndex] : false)),
    ]);
  };

  return (
    <div className={styles.differences}>
      <div className={styles.content}>
        <div className={classnames([styles.logo, styles.restLogo])}>
          <RESTLogo />
        </div>

        <div className={styles.center}>
          <h1>Krótka teoria:</h1>
          <h2>Główne różnice między REST a GraphQL:</h2>

          <div className={styles.differencesList}>
            <div className={styles.differenceItem} onClick={() => toggleSection(0)}>
              <div
                className={classnames([
                  styles.arrow,
                  openSections[0] ? styles.arrowRotated : undefined,
                ])}>
                <Arrow />
              </div>
              <p className={styles.differenceTitle}>Obsługiwane zapytania</p>
            </div>

            {openSections[0] && (
              <div className={styles.description}>
                <div>GET, POST, DELETE, PUT, PATCH</div>
                <div>POST</div>
              </div>
            )}

            <div className={styles.differenceItem} onClick={() => toggleSection(1)}>
              <div
                className={classnames([
                  styles.arrow,
                  openSections[1] ? styles.arrowRotated : undefined,
                ])}>
                <Arrow />
              </div>
              <p className={styles.differenceTitle}>Zasada działania</p>
            </div>

            {openSections[1] && (
              <div className={styles.descriptionImage}>
                <img
                  src={'https://devopedia.org/images/article/147/8496.1558526064.jpg'}
                  alt={'REST vs GraphQL'}
                  width={776}
                />
                <p>Źródło: www.devopedia.org</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.logo}>
          <GraphQLLogo />
        </div>
      </div>

      <CustomLink to={'/example-query'} content={'Przykładowe query'} />
    </div>
  );
};

export default DifferencesView;
