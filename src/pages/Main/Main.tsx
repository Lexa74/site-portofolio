import styles from './main.module.css';
import { LeftColumn } from './components/LeftColumn/LeftColumn.tsx';
import { RightColumns } from './components/RightColumn/RightColumns.tsx';

export const Main = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <LeftColumn />
        <RightColumns />
      </div>
    </div>
  );
};
