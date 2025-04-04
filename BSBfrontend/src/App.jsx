import { useState } from "react";
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import "./App.css"

function App() {
  const [isLoaded, setIsLoaded] = setState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App;
