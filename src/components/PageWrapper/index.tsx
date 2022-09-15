import Footer from '@/components/Footer';
import Header from '@/components/Header';

import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
};

const PageWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      {children}
      <Footer color={'green'} />
    </div>
  );
};

export default PageWrapper;
