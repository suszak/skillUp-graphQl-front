/* eslint-disable @typescript-eslint/no-explicit-any,no-template-curly-in-string */
import { useEffect, useState } from 'react';

import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';

import styles from './styles.module.scss';

const FetchExampleView = (): JSX.Element => {
  const [content, setContent] = useState<any>([]);

  const getAllUsersNames = (): void => {
    setContent(['loading...']);

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_DATO_CMS_TOKEN}`,
      },
      body: JSON.stringify({
        query: '{ allUsers { firstName } }',
      }),
    })
      .then(res => res.json())
      .then(data => {
        setContent(data.data?.allUsers);
      })
      .catch(() => setContent(['Error']));
  };

  useEffect(() => {
    getAllUsersNames();
  }, []);

  return (
    <div className={styles.fetchExample}>
      <h1>GraphQL z użyciem fetch():</h1>
      <CodeWrapper
        title={'fetch.ts'}
        content={
          "fetch('https://graphql.datocms.com/', {\n" +
          "      method: 'POST',\n" +
          '      headers: {\n' +
          "        'Authorization': `Bearer ${import.meta.env.VITE_DATO_CMS_TOKEN}`,\n" +
          '      },\n' +
          '      body: JSON.stringify({\n' +
          "        query: '{ allUsers { firstName } }',\n" +
          '      }),\n' +
          '    })'
        }
      />
      <button className={styles.button} onClick={getAllUsersNames}>
        Pobierz dane
      </button>

      <p>{content.map((user: any) => user.firstName).join(', ') || 'brak danych'}</p>

      <CustomLink to={'/rtk-query-get'} content={'Praktyka: RTK Query "GET"'} />
    </div>
  );
};

export default FetchExampleView;
