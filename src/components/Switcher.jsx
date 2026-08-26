import "./Switcher.css";

export function Switcher({ isActiveTasksViewMode, setIsActiveTasksViewMode }) {
  return (
    <div className="task-switch-container">
      <button
        className={`tab-button ${isActiveTasksViewMode ? "active" : ""}`}
        onClick={() => {
          setIsActiveTasksViewMode(true);
        }}
      >
        Active Tasks
      </button>
      <button
        className={`tab-button ${isActiveTasksViewMode ? "" : "active"}`}
        onClick={() => {
          setIsActiveTasksViewMode(false);
        }}
      >
        Completed Tasks
      </button>
    </div>
  );
}
