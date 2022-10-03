import classnames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  color: 'green';
};

const Footer = ({ color }: Props): JSX.Element => {
  return (
    <footer className={classnames([styles.footer, color === 'green' ? styles.green : undefined])}>
      <p>&copy; Mateusz Greń 2022, NubiSoft</p>
    </footer>
  );
};

export default Footer;
