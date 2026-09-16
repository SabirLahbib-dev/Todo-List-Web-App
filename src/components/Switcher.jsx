import "./Switcher.css";

export function Switcher({ isActiveTasksViewMode, setIsActiveTasksViewMode }) {
  return (
    <div className="task-switch-container">
      <button
        className={`tab-button ${isActiveTasksViewMode ? "active" : ""}`}
        onClick={() => {
          setIsActiveTasksViewMode(true);
        }}
        data-testid="active-tasks-switch-button"
      >
        Active Tasks
      </button>
      <button
        className={`tab-button ${isActiveTasksViewMode ? "" : "active"}`}
        onClick={() => {
          setIsActiveTasksViewMode(false);
        }}
        data-testid="completed-tasks-switch-button"
      >
        Completed Tasks
      </button>
    </div>
  );
}
