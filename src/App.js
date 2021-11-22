import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes.js';
import Home from 'pages/Home.js';
import Management from 'pages/Management.js';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.MANAGEMENT} element={<Management />} />
      <Route path='/*' element={<Navigate replace to={ROUTES.HOME} />} />
    </Routes>
  );
};

export default App;
