/* eslint-disable no-template-curly-in-string,@typescript-eslint/no-explicit-any */
import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';
import { useGetUsersQuery } from '@/services/api';
import styles from '@/views/FetchExampleView/styles.module.scss';

const RTKQueryExampleGETView = (): JSX.Element => {
  const { data: users, isLoading, refetch } = useGetUsersQuery();

  return (
    <div className={styles.fetchExample}>
      <h1>GraphQL z użyciem RTK Query &quot;GET&quot;:</h1>
      <CodeWrapper
        title={'api.ts'}
        content={
          "import { createApi } from '@reduxjs/toolkit/query/react';\n" +
          "import { gql } from 'graphql-request';\n" +
          "import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';\n" +
          '\n' +
          '(...)\n' +
          '\n' +
          'export const api = createApi({\n' +
          '  baseQuery: graphqlRequestBaseQuery({\n' +
          "    url: 'https://graphql.datocms.com/',\n" +
          '    prepareHeaders: (headers) => {\n' +
          "      headers.set('Authorization', `Bearer ${import.meta.env.VITE_DATO_CMS_TOKEN}`);\n" +
          '      return headers;\n' +
          '    },\n' +
          '  }),\n' +
          '  endpoints: (builder) => ({\n' +
          '    getUsers: builder.query<GetUsersResponse,\n' +
          '      void>({\n' +
          '      query: () => ({\n' +
          '        document: gql`\n' +
          '          query {\n' +
          '            allUsers { \n' +
          '              firstName \n' +
          '            }\n' +
          '          }\n' +
          '        `,\n' +
          '      }),\n' +
          '    }),\n' +
          '  }),\n' +
          '});\n' +
          '\n' +
          'export const { useGetUsersQuery } = api;\n'
        }
      />

      <button className={styles.button} onClick={refetch}>
        Pobierz dane
      </button>

      {!isLoading ? (
        <p>{users?.allUsers.map((user: any) => user.firstName).join(', ') || 'brak danych'}</p>
      ) : (
        <p>Loading...</p>
      )}

      <CustomLink to={'/rtk-query-post'} content={'Praktyka: RTK Query "POST"'} />
    </div>
  );
};

export default RTKQueryExampleGETView;
