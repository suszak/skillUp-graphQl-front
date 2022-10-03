import { ReactComponent as FacebookLogo } from '@/assets/facebook-logo.svg';
import { ReactComponent as GraphQLLogo } from '@/assets/graphql-logo.svg';
import CustomLink from '@/components/CustomLink';

import styles from './styles.module.scss';

const IntroView = (): JSX.Element => {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <GraphQLLogo />
        </div>

        <div className={styles.center}>
          <h1>Krótka teoria:</h1>
          <h2>GraphQL w kilku zdaniach:</h2>

          <ol>
            <li>jest to język zapytań</li>
            <li>historia:</li>
          </ol>

          <div className={styles.timeline}>
            <div className={styles.point} />
            <div className={styles.point} />
            <div className={styles.point} />
            <div className={styles.point} />

            <div className={styles.arrow} />
          </div>
        </div>

        <div className={styles.logo}>
          <FacebookLogo />
        </div>
      </div>

      <CustomLink to={'/differences'} content={'GraphQL vs REST'} />
    </div>
  );
};

export default IntroView;
