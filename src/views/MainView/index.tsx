import { ReactComponent as BackgroundWave } from '@/assets/background/wave1.svg';
import { ReactComponent as GraphQLLogo } from '@/assets/graphql-logo.svg';
import { ReactComponent as SkillUpLogo } from '@/assets/skillUp-logo.svg';
import CustomLink from '@/components/CustomLink';

import styles from './styles.module.scss';

const MainView = (): JSX.Element => {
  return (
    <div className={styles.mainViewContainer}>
      <div className={styles.content}>
        <h1>SkillUp</h1>
        <h2>GraphQL - na froncie</h2>

        <div className={styles.logosWrapper}>
          <div className={styles.logoWrapper}>
            <SkillUpLogo />
          </div>
          <div className={styles.logoWrapper}>
            <GraphQLLogo />
          </div>
        </div>

        <CustomLink to={'/intro'} content={'Zaczynamy!'} />
      </div>

      <div className={styles.background}>
        <BackgroundWave />
      </div>
    </div>
  );
};

export default MainView;
