import classnames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  isOpened: boolean;
};

const HamburgerButton = ({ isOpened, onClick }: Props): JSX.Element => {
  return (
    <div
      className={classnames([
        styles.hamburgerMenu,
        isOpened ? styles.hamburgerMenuOpened : undefined,
      ])}
      onClick={onClick}>
      <div className={styles.firstLine}>
        <div />
        <div />
      </div>

      <div className={styles.secondLine} />

      <div className={styles.thirdLine}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default HamburgerButton;
