import "./TasksGrid.css";

export function TasksGrid({ activeTasks }) {
  const BCcolors = [
    "#E0E7FF", // Soft Indigo / Blue
    "#FEF08A", // Creamy Yellow
    "#BBF7D0", // Soft Green / Mint
    "#FBCFE8", // Soft Pink
    "#E9D5FF", // Soft Lilac / Purple
    "#FED7AA", // Warm Peach / Apricot
    "#BAE6FD", // Sky Blue
    "#E2E8F0", // Cool Slate Gray
  ];

  return (
    <div className="tasks-list-grid">
      {activeTasks.map((task, taskIndex) => {
        return (
          <div
            key={task.id}
            className="task-container"
            style={{ backgroundColor: BCcolors[taskIndex % BCcolors.length] }}
          >
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
