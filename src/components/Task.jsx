import { useState } from "react";
import detailsIcon from "../assets/icons/details-icon.png";
import deleteIcon from "../assets/icons/delete-icon.png";

export function Task({
  task,
  BCcolors,
  taskIndex,
  activeTasks,
  isActiveTasks,
  setActiveTasks,
  setCompletedTasks,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const deleteTask = (taskId) => {
    const setTasks = isActiveTasks ? setActiveTasks : setCompletedTasks;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // complete task
  const completeTask = (taskId) => {
    const completedTask = activeTasks.find((task) => {
      return task.id === taskId;
    });
    completedTask.isCompleted = true;
    setCompletedTasks((prevTasks) => {
      return [...prevTasks, completedTask];
    });
    deleteTask(taskId);
  };

  return (
    <div
      className="task-container"
      style={{ backgroundColor: BCcolors[taskIndex % BCcolors.length] }}
    >
      <div className="task-header">
        <div className="title-and-checkbox-container">
          <input
            type="checkbox"
            className="task-checkbox"
            onClick={() => {
              completeTask(task.id);
            }}
          />
          <div className="task-title">{task.name}</div>
        </div>
        <button className="dropDown-options-button">
          <img
            src={detailsIcon}
            height={20}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          />
          <div
            className={`dropDown-options-container ${isDropdownOpen && "open"}`}
          >
            <div className="delete-link-container">
              <img src={deleteIcon} height={14} />
              <span
                className="delete-task-link"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Delete
              </span>
            </div>
          </div>
        </button>
      </div>
      <div className="task-description">{task.description}</div>
      <div className="task-date">{task.date}</div>
      <div className="task-start-and-end-time">{task.startTime}</div>
    </div>
  );
}
