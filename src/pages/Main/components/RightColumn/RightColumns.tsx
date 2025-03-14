import styles from './rightColumn.module.css';
import { WorkExperienceItem } from '../WorkExperienceItem/WorkExperienceItem.tsx';
import { data } from '../../data.ts';

export const RightColumns = () => {
  return (
    <>
      <div className={styles.rightColumn}>
        <h2 className={styles.title}>Опыт работы</h2>
        <p className={styles.subtitle}>Более 10 лет</p>
        {data.map((work, index) => (
          <WorkExperienceItem
            title={work.title}
            interval={work.interval}
            responsibilities={work.responsibilities}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
