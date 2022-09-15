import { useState } from 'react';

import Hamburger from '@/components/Hamburger';

import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClick = (): void => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <div className={styles.header}>
      <Hamburger onClick={handleClick} isOpened={isMenuOpened} />
    </div>
  );
};

export default Header;
