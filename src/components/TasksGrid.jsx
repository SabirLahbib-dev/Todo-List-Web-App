import "./TasksGrid.css";

export function TasksGrid({ activeTasks }) {
  return (
    <div className="tasks-list-grid">
      {activeTasks.map((task) => {
        return (
          <div key={task.id} className="task-container">
            <div className="title-and-checkbox-container">
              <input type="checkbox" className="task-checkbox"></input>
              <div className="task-title">{task.name}</div>
            </div>
            <div className="task-description">{task.description}</div>
            <div className="task-date">{task.date}</div>
            <div className="task-start-and-end-time">{task.startTime}</div>
          </div>
        );
      })}
    </div>
  );
}
