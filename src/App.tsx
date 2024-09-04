import { useState } from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Splash from './Components/Splash'; 
import Vantagens from "./Components/Vantagens";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <Splash onAnimationComplete={handleAnimationComplete} />
      ) : (
        <>
          <Navbar />
          <Home />
          <Vantagens/>
        </>
      )}
    </>
  );
};

export default App;
