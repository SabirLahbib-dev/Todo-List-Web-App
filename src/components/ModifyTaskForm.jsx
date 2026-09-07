import cancelIcon from "../assets/icons/cancel-icon.png";
import "./ModifyTaskForm.css";

export function ModifyTaskForm({ isModifyingTask, setIsModifyingTask }) {
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
      />
      <input type="date" className="add-new-task-inputs" />
      <input type="time" className="add-new-task-inputs" />
      <textarea
        className="add-new-task-description-input"
        placeholder="Task description"
      />
      <div className="action-buttons-container">
        <button
          className="cancel-button"
          onClick={() => setIsModifyingTask(false)}
        >
          Cancel
        </button>
        <button className="modify-button">Modify</button>
      </div>
    </div>
  );
}
