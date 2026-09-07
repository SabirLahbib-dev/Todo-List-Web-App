import { Task } from "./Task";
import "./TasksGrid.css";

export function TasksGrid({
  activeTasks,
  setActiveTasks,
  setCompletedTasks,
  completedTasks,
  isActiveTasksViewMode,
  searchTerm,
  selectedDate,
  setIsModifyingTask,
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

  const baseTasks = isActiveTasksViewMode ? activeTasks : completedTasks;
  const query = searchTerm.trim().toLowerCase();

  const tasks = baseTasks.filter((task) => {
    // 1. Date condition: Direct string comparison
    const matchesDate = !selectedDate || task.date === selectedDate;

    // 2. Search condition
    const matchesSearch =
      !query ||
      task.name.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query);

    // these two should be true, that's why I did !query and !selectedDate
    return matchesDate && matchesSearch;
  });

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
            completedTasks={completedTasks}
            taskIndex={taskIndex}
            BCcolors={BCcolors}
            key={task.id}
            setIsModifyingTask={setIsModifyingTask}
          />
        );
      })}
    </div>
  );
}
