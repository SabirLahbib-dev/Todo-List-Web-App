import searchIcon from "../assets/icons/search-icon.png";
import newListIcon from "../assets/icons/new-list-icon.png";
import "./Header.css";

export function Header({
  isMobileViewport,
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}) {
  return (
    <>
      <div className="app-title-container">
        <h1 className="app-title">Todo List App</h1>
        <img src={newListIcon} alt="New List" height="25" />
        <span className="new-list-number">3</span>
      </div>
      <header className="App-header">
        <p className="todays-date">21st February, 2025</p>
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
          <button className="add-new-list-button">Add New List</button>
        </div>
      </header>
    </>
  );
}
