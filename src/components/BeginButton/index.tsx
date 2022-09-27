import styles from './styles.module.scss';

const BeginButton = (): JSX.Element => {
  return (
    <button className={styles.button}>
      Zaczynamy!
      <div className={styles.arrow} />
    </button>
  );
};

export default BeginButton;
