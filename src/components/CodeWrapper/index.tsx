import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './styles.module.scss';

type Props = {
  title: string;
  content: string;
};

const CodeWrapper = ({ title, content }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>
        <div className={styles.dotsWrapper}>
          <div />
          <div />
          <div />
        </div>
        <p>{title}</p>
        <div />
      </div>
      <SyntaxHighlighter language={'javascript'} style={atomOneDark} showLineNumbers={true}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeWrapper;
