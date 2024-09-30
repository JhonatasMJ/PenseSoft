// src/App.js


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from "./Pages/Main";
import Orcamento from './Pages/Orcamento';


const App = () => {

  return (
    <Router>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main /> 
              </>
            }
          />
          <Route
            path="/orcamento"
            element={
              <>
                <Navbar />
                <Orcamento />
              </>
            }
          />
        </Routes>

    </Router>
  );
};

export default App;
