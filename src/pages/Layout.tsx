import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Я заголовок на всех страницах</h1>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Outlet />
    </>
  );
};
