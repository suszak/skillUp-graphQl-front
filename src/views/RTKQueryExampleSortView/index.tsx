/* eslint-disable @typescript-eslint/no-explicit-any */
import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';
import { useGetSortedUsersQuery } from '@/services/api';
import styles from '@/views/FetchExampleView/styles.module.scss';

const RTKQueryExampleFilterView = (): JSX.Element => {
  const { data: users, isLoading, refetch } = useGetSortedUsersQuery();

  return (
    <div className={styles.fetchExample}>
      <h1>GraphQL z użyciem RTK Query - sortowanie:</h1>
      <CodeWrapper
        title={'api.ts'}
        content={
          'getSortedUsers: builder.query<GetUsersResponse, void>({\n' +
          '  query: () => ({\n' +
          '    document: gql`\n' +
          '      query {\n' +
          '        allUsers(orderBy: firstName_ASC) {\n' +
          '          firstName\n' +
          '          id\n' +
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

      <CustomLink to={'/real-example'} content={'Praktyczne zastosowanie GraphQL'} />
    </div>
  );
};

export default RTKQueryExampleFilterView;
