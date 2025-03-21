import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main.tsx';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage.tsx';
import { Layout } from './pages/Layout.tsx';
import { ProjectPage } from './pages/ProjectPage/ProjectPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
