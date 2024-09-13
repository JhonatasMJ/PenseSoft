
import { Route, Routes } from 'react-router-dom';
import Orcamento from '../Pages/Orcamento'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orcamento />} />
    </Routes>
  );
};

export default AppRoutes;
