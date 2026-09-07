import cancelIcon from "../assets/icons/cancel-icon.png";
import "./ModifyTaskForm.css";

export function ModifyTaskForm({
  isModifyingTask,
  setIsModifyingTask,
  setTaskToModify,
  taskToModify,
  setActiveTasks,
  setCompletedTasks,
  isActiveTasksViewMode,
}) {
  // modify task function
  const modifyTask = () => {
    if (!taskToModify) return; // Guard clause

    const { id, name, date, startTime, description } = taskToModify;
    if (isActiveTasksViewMode) {
      setActiveTasks((prevTasks) => {
        return prevTasks.map((task) =>
          task.id === id
            ? { ...task, name, date, startTime, description }
            : task,
        );
      });
    } else {
      setCompletedTasks((prevTasks) => {
        return prevTasks.map((task) =>
          task.id === id
            ? { ...task, name, date, startTime, description }
            : task,
        );
      });
    }

    setIsModifyingTask(false);
    setTaskToModify(null);
  };
  return (
    <div
      className={`modify-task-form-container ${isModifyingTask ? "open" : ""}`}
    >
      <div className="form-header">
        <div className="form-title">Modify Task</div>
        <button
          className="cancel-adding-button"
          onClick={() => setIsModifyingTask(false)}
        >
          <img src={cancelIcon} height={15} />
        </button>
      </div>
      <input
        type="text"
        className="add-new-task-inputs"
        placeholder="Task name"
        value={taskToModify ? taskToModify.name : ""}
        onChange={(e) => {
          setTaskToModify((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
      />
      <input
        type="date"
        className="add-new-task-inputs"
        value={taskToModify ? taskToModify.date : ""}
        onChange={(e) => {
          setTaskToModify((prev) => {
            return { ...prev, date: e.target.value };
          });
        }}
      />
      <input
        type="time"
        className="add-new-task-inputs"
        value={taskToModify ? taskToModify.startTime : ""}
        onChange={(e) => {
          setTaskToModify((prev) => {
            return { ...prev, startTime: e.target.value };
          });
        }}
      />
      <textarea
        className="add-new-task-description-input"
        placeholder="Task description"
        value={taskToModify ? taskToModify.description : ""}
        onChange={(e) => {
          setTaskToModify((prev) => {
            return { ...prev, description: e.target.value };
          });
        }}
      />
      <div className="action-buttons-container">
        <button
          className="cancel-button"
          onClick={() => setIsModifyingTask(false)}
        >
          Cancel
        </button>
        <button className="modify-button" onClick={modifyTask}>
          Modify
        </button>
      </div>
    </div>
  );
}
