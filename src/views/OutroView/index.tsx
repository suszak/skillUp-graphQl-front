import { ReactComponent as BackgroundWave } from '@/assets/background/wave1.svg';

import styles from './styles.module.scss';

const OutroView = (): JSX.Element => {
  return (
    <div className={styles.outroViewContainer}>
      <div className={styles.content}>
        <h1>To chyba tyle 😁</h1>
        <h2>Dzięki za uwagę</h2>
      </div>

      <div className={styles.background}>
        <BackgroundWave />
      </div>
    </div>
  );
};

export default OutroView;
