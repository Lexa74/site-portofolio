import styles from './main.module.css';
import { LeftColumn } from './components/LeftColumn/LeftColumn.tsx';

export const Main = () => {
  return (
    <div className={'center'}>
      <div className={styles.container}>
        <LeftColumn />
        <div className={styles.rightColumn}>
          <h2>Опыт работы</h2>
        </div>
      </div>
    </div>
  );
};
