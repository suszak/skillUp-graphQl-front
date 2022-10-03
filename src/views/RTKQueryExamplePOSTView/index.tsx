import CodeWrapper from '@/components/CodeWrapper';
import CustomLink from '@/components/CustomLink';
import styles from '@/views/FetchExampleView/styles.module.scss';

const RTKQueryExampleGETView = (): JSX.Element => {
  return (
    <div className={styles.fetchExample}>
      <h1>GraphQL z użyciem RTK Query &quot;POST&quot;:</h1>
      <CodeWrapper
        title={'api.ts'}
        content={
          'mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n' +
          '  createReview(episode: $ep, review: $review) {\n' +
          '    stars\n' +
          '    commentary\n' +
          '  }\n' +
          '}'
        }
      />

      <CodeWrapper
        title={'variables.ts'}
        content={
          '{\n' +
          '  "ep": "JEDI",\n' +
          '  "review": {\n' +
          '    "stars": 5,\n' +
          '    "commentary": "This is a great movie!"\n' +
          '  }\n' +
          '}'
        }
      />

      <CodeWrapper
        title={'result.ts'}
        content={
          '{\n' +
          '  "data": {\n' +
          '    "createReview": {\n' +
          '      "stars": 5,\n' +
          '      "commentary": "This is a great movie!"\n' +
          '    }\n' +
          '  }\n' +
          '}'
        }
      />

      <CustomLink to={'/rtk-query-filter'} content={'Praktyka: RTK Query - filtrowanie'} />
    </div>
  );
};

export default RTKQueryExampleGETView;
