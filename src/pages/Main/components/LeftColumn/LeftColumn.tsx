import styles from './leftColumn.module.css';
import { MailIcon } from '../../../../UI/Icons/MailIcon/MailIcon.tsx';
import { TelegramIcon } from '../../../../UI/Icons/TelegramIcon/TelegramIcon.tsx';

export const LeftColumn = () => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.heading}>
        <h1 className={styles.family}>Константин Иванов</h1>
        <p className={styles.vocation}>Web-разработчик</p>
      </div>
      <div className={styles.about}>
        <div className={styles.about__text}>
          <p>
            Более X лет опыта работы в различных областях дизайна и продукта,
            включая ...
          </p>
          <p>
            Обладаю углубленным пониманием того, как создавать интерфейсы...
            Моим преимуществом является...
          </p>
          <p>Экспертный уровень в проектировании... Также занимаюсь...</p>
        </div>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.contacts__heading}>Контакты</h3>
        <div className={styles.contacts__wrapper}>
          <MailIcon />
          <a className={styles.contacts__link} href="#">
            mail
          </a>
        </div>
        <div className={styles.contacts__wrapper}>
          <TelegramIcon color={'gray'} />
          <a className={styles.contacts__link} href="#">
            telegram
          </a>
        </div>
      </div>
    </div>
  );
};
