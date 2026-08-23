import { useEffect, useState } from "react";
import dayjs from "dayjs";
import searchIcon from "../assets/icons/search-icon.png";
import newListIcon from "../assets/icons/new-list-icon.png";
import "./Header.css";

export function Header({ setIsAddingNewTask, activeTasks }) {
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
      <div className="app-title-container">
        <h1 className="app-title">Todo List App</h1>
        <img src={newListIcon} alt="New List" height="25" />
        <span className="new-list-number">{activeTasks.length}</span>
      </div>
      <header className="App-header">
        <select className="day-selector">
          <option>{dayjs().format('D, MMMM YYYY')}</option>
        </select>
        <div className="left-section">
          {/* search button for small screens */}
          <button
            className="search-mobile-button"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>

          {/* search bar for small screens */}
          {isMobileViewport && isMobileSearchOpen && (
            <div className="search-bar-container-mobile">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input
                type="search"
                className="search-bar"
                placeholder="Search list..."
              ></input>
            </div>
          )}

          {/* search bar for large screens */}
          <div className="search-bar-container">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input
              type="search"
              className="search-bar"
              placeholder="Search list..."
            ></input>
          </div>
          <button
            className="add-new-list-button"
            onClick={() => {
              setIsAddingNewTask(true);
            }}
          >
            Add New List
          </button>
        </div>
      </header>
    </>
  );
}
