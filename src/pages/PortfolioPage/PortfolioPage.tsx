import styles from './portfolioPage.module.css';
import { Link } from 'react-router-dom';
import { dataPortfolio } from './dataPortfolio.ts';

export const PortfolioPage = () => {
  return (
    <>
      <h1 className={styles.title}>Мои работы</h1>
      <div className={styles.container}>
        {dataPortfolio.map((el) => (
          <Link key={el.id} to={`/portfolio/${el.id}`} className={styles.card}>
            <div className={styles.wrapperImage}>
              <img className={styles.card__image} src={el.src} alt="" />
            </div>
            <h3 className={styles.card__name}>{el.name}</h3>
            <p className={styles.card__description}>{el.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
