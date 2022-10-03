/* eslint-disable no-template-curly-in-string,@typescript-eslint/no-explicit-any */
import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';
import { useGetFilteredUsersQuery } from '@/services/api';
import styles from '@/views/FetchExampleView/styles.module.scss';

const RTKQueryExampleFilterView = (): JSX.Element => {
  const { data: users, isLoading, refetch } = useGetFilteredUsersQuery({ name: 'r' });

  return (
    <div className={styles.fetchExample}>
      <h1>GraphQL z użyciem RTK Query - filtrowanie:</h1>
      <CodeWrapper
        title={'api.ts'}
        content={
          'getFilteredUsers: builder.query<GetUsersResponse, { name: string }>({\n' +
          '  query: ({ name }) => ({\n' +
          '    document: gql`\n' +
          '      query {\n' +
          '        allUsers(filter: {firstName: {matches: {pattern: "${name}"}}}) {\n' +
          '          firstName\n' +
          '        }\n' +
          '      }\n' +
          '    `,\n' +
          '  }),\n' +
          '}),'
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

      <CustomLink to={'/rtk-query-sort'} content={'Praktyka: RTK Query - sortowanie'} />
    </div>
  );
};

export default RTKQueryExampleFilterView;
