import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import { LeftColumn } from './Main/components/LeftColumn/LeftColumn.tsx';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.nav__link} to={'/'}>
            Главная
          </Link>
          <Link className={styles.nav__link} to={'/portfolio'}>
            Портфолио
          </Link>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.container}>
          <LeftColumn />
          <div className={styles.rightColumn}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
