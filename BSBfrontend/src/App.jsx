import { useState } from "react";
import "./App.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
    <div className="w-screen overflow-x-hidden">
      <div className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 box-border overflow-x-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </>
  );
}

export default App;
