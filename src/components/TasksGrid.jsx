import { Task } from "./Task";
import "./TasksGrid.css";

export function TasksGrid({ activeTasks, setActiveTasks }) {
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
          <Task
            task={task}
            setActiveTasks={setActiveTasks}
            taskIndex={taskIndex}
            BCcolors={BCcolors}
            key={task.id}
          />
        );
      })}
    </div>
  );
}
