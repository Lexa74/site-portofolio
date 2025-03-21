import styles from './workExpItem.module.css';
import { WorkType } from '../../data.ts';

export const WorkExperienceItem = ({
  title,
  period,
  responsibilities,
}: WorkType) => {
  return (
    <div className={styles.workExp}>
      <div className={styles.workExp__title}>{title}</div>
      <div className={styles.workExp__interval}>{period}</div>
      <div className={styles.workExp__responsibilities}>
        <ul>
          {responsibilities.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
