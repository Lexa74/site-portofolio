import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.nav__link} to={'/'}>
            Главная
          </Link>
          <Link className={styles.nav__link} to={'/about'}>
            Портфолио
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
