import styles from './rightColumn.module.css';
import { WorkExperienceItem } from '../WorkExperienceItem/WorkExperienceItem.tsx';
import { data } from '../../data.ts';

export const RightColumns = () => {
  return (
    <>
      <h2 className={styles.title}>Опыт работы</h2>
      <p className={styles.subtitle}>Более 10 лет</p>
      {data.map((work, index) => (
        <WorkExperienceItem
          title={work.title}
          period={work.period}
          responsibilities={work.responsibilities}
          key={index}
        />
      ))}
    </>
  );
};
