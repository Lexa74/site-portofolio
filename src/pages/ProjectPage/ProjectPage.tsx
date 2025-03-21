import { useParams } from 'react-router-dom';
import { dataPortfolio } from '../PortfolioPage/dataPortfolio.ts';

export const ProjectPage = () => {
  const { id } = useParams();
  const project = dataPortfolio.find((el) => el.id === Number(id));

  if (!project) {
    return <h1>Такого проекта не существует</h1>;
  }

  return (
    <>
      <h1>{project.name}</h1>
    </>
  );
};
