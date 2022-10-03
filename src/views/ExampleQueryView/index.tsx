import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';

import styles from './styles.module.scss';

const ExampleQueryView = (): JSX.Element => {
  return (
    <div className={styles.exampleQuery}>
      <h1>Przykładowe query:</h1>
      <CodeWrapper
        title={'exampleQuery1.ts'}
        content={
          'query {\n' +
          '  allUsers {\n' +
          '    firstName\n' +
          '    role\n' +
          '    description\n' +
          '  }\n' +
          '}'
        }
      />
      <CustomLink to={'/fetch'} content={'Praktyka: fetch()'} />
    </div>
  );
};

export default ExampleQueryView;
