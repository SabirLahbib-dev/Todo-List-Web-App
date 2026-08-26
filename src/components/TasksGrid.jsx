import { Task } from "./Task";
import "./TasksGrid.css";

export function TasksGrid({
  activeTasks,
  setActiveTasks,
  setCompletedTasks,
  completedTasks,
  isActiveTasksViewMode,
}) {
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

  let tasks;
  if (isActiveTasksViewMode) {
    tasks = activeTasks;
  } else {
    tasks = completedTasks;
  }

  return (
    <div className="tasks-list-grid">
      {tasks.map((task, taskIndex) => {
        return (
          <Task
            task={task}
            setActiveTasks={setActiveTasks}
            activeTasks={activeTasks}
            isActiveTasksViewMode={isActiveTasksViewMode}
            setCompletedTasks={setCompletedTasks}
            taskIndex={taskIndex}
            BCcolors={BCcolors}
            key={task.id}
          />
        );
      })}
    </div>
  );
}
