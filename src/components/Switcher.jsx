import "./Switcher.css";

export function Switcher({ isActiveTasks, setIsActiveTasks }) {
  return (
    <div className="task-switch-container">
      <button
        className={`tab-button ${isActiveTasks && "active"}`}
        onClick={() => {
          setIsActiveTasks(true);
        }}
      >
        Active Tasks
      </button>
      <button
        className={`tab-button ${isActiveTasks ? null : "active"}`}
        onClick={() => {
          setIsActiveTasks(false);
        }}
      >
        Completed Tasks
      </button>
    </div>
  );
}
