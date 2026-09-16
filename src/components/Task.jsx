import { useState } from "react";
import dayjs from "dayjs";
import detailsIcon from "../assets/icons/details-icon.png";
import deleteIcon from "../assets/icons/delete-icon.png";
import modifyIcon from "../assets/icons/modify-icon.png";

export function Task({
  task,
  BCcolors,
  taskIndex,
  activeTasks,
  isActiveTasksViewMode,
  setActiveTasks,
  setCompletedTasks,
  completedTasks,
  setIsModifyingTask,
  setTaskToModify,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const deleteTask = (taskId) => {
    const setTasks = isActiveTasksViewMode ? setActiveTasks : setCompletedTasks;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    if (isActiveTasksViewMode) {
      const completedTask = activeTasks.find((task) => {
        return task.id === taskId;
      });
      if (!completedTask) return; // Guard clause

      setCompletedTasks((prevTasks) => {
        return [...prevTasks, { ...completedTask, isCompleted: true }];
      });

      setActiveTasks((prev) => {
        return prev.filter((task) => task.id !== taskId);
      });

      // if it's completed tasks view mode
    } else {
      const uncompletedTask = completedTasks.find((task) => {
        return task.id === taskId;
      });
      if (!uncompletedTask) return; // Guard clause

      setActiveTasks((preTasks) => {
        return [...preTasks, { ...uncompletedTask, isCompleted: false }];
      });

      setCompletedTasks((prev) => {
        return prev.filter((task) => task.id !== taskId);
      });
    }
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
            checked={task.isCompleted}
            onChange={() => {
              toggleTaskStatus(task.id);
            }}
            className="task-checkbox"
            data-testid="task-checkbox"
          />
          <div
            className={`task-title ${task.isCompleted ? "completed-task" : ""}`}
          >
            {task.name}
          </div>
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
                data-testid="delete-task-button"
              >
                Delete
              </span>
            </div>
            <div className="modify-link-container">
              <img src={modifyIcon} height={14} />
              <span
                className="modify-task-link"
                onClick={() => {
                  setIsModifyingTask(true);
                  setTaskToModify(task);
                  setIsDropdownOpen(false);
                }}
              >
                Modify
              </span>
            </div>
          </div>
        </button>
      </div>
      <div className="task-description">{task.description}</div>
      <div className="task-date">
        {dayjs(task.date).format("DD, MMMM YYYY")}
      </div>
      <div className="task-start-and-end-time">{task.startTime}</div>
    </div>
  );
}
