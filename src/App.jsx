import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  const [isMobileViewport, setIsMobileViewport] = useState(
    window.innerWidth <= 550,
  );
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileViewport = window.innerWidth <= 550;
      setIsMobileViewport(mobileViewport);

      if (!mobileViewport) {
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header
        isMobileViewport={isMobileViewport}
        isMobileSearchOpen={isMobileSearchOpen}
        setIsMobileSearchOpen={setIsMobileSearchOpen}
      />
      {/* Main content of the app can go here */}
      <main className="main-content">
        <div className="active-and-completed-tasks-switchers">
          <button className="active-tasks-button">Active Tasks</button>
          <button className="completed-tasks-button">Completed Tasks</button>
        </div>
      </main>
    </>
  );
}

export default App;
