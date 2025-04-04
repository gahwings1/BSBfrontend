import "./App.css"
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = setState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App;
