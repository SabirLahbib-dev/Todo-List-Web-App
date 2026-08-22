import cancelIcon from "../assets/icons/cancel-icon.png";
import "./AddNewTaskForm.css";

export function AddNewTaskForm({ isAddingNewTask, setIsAddingNewTask }) {
  return (
    <div className={`add-new-task-form ${isAddingNewTask && "open"}`}>
      <div className="form-header">
        <div className="form-title">Add New List</div>
        <button
          className="cancel-adding-button"
          onClick={() => {
            setIsAddingNewTask(false);
          }}
        >
          <img src={cancelIcon} height={15} />
        </button>
      </div>
      <input
        type="text"
        placeholder="Task name"
        className="add-new-task-inputs"
      />
      <input
        type="text"
        placeholder="Task Date"
        className="add-new-task-inputs"
      />
      <input
        type="text"
        placeholder="Task time interval"
        className="add-new-task-inputs"
      />
      <textarea
        type="text"
        placeholder="Description..."
        className="add-new-task-description-input"
      />
      <div className="action-buttons-container">
        <button
          className="cancel-button"
          onClick={() => {
            setIsAddingNewTask(false);
          }}
        >
          Cancel
        </button>
        <button className="add-new-button">Add New</button>
      </div>
    </div>
  );
}
