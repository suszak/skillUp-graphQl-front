import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  color: 'green';
};

const Footer = ({ color }: Props): JSX.Element => {
  return (
    <footer className={classNames([styles.footer, color === 'green' ? styles.green : undefined])}>
      <p>&copy; Mateusz Greń 2022, Nubisoft</p>
    </footer>
  );
};

export default Footer;
