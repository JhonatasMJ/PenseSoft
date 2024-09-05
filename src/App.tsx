// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from "./Pages/Main";
import Orcamento from './Pages/Orcamento';
import Splash from './Components/Splash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <Splash onAnimationComplete={handleAnimationComplete} />
      ) : (
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
      )}
    </Router>
  );
};

export default App;
