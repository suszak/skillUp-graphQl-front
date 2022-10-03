import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type Props = {
  to: string;
  content: string;
};

const CustomLink = ({ to, content }: Props): JSX.Element => {
  return (
    <Link to={to} className={styles.button}>
      <>
        {content}
        <div className={styles.arrow} />
      </>
    </Link>
  );
};

export default CustomLink;
