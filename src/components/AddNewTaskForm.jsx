import { useState } from "react";
import cancelIcon from "../assets/icons/cancel-icon.png";
import "./AddNewTaskForm.css";

export function AddNewTaskForm({
  isAddingNewTask,
  setIsAddingNewTask,
  setActiveTasks,
}) {
  const [taskFormData, setTaskFormData] = useState({
    id: "",
    name: "",
    date: "",
    startTime: "",
    description: "",
    isCompleted: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTaskFormData((previousTaskData) => {
      return {
        ...previousTaskData,
        id: crypto.randomUUID(),
        isCompleted: false,
        [name]: value,
      };
    });
  };

  const addNewTask = () => {
    if (
      !taskFormData.name.trim() ||
      !taskFormData.date.trim() ||
      !taskFormData.startTime.trim() ||
      !taskFormData.description.trim()
    ) {
      return;
    }

    setActiveTasks((prevTasks) => {
      return [...prevTasks, taskFormData];
    });
    setIsAddingNewTask(false);

    setTaskFormData({
      name: "",
      date: "",
      startTime: "",
      description: "",
    });
  };

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
        name="name"
        value={taskFormData.name}
        placeholder="Task name"
        className="add-new-task-inputs"
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={taskFormData.date}
        placeholder="Task Date"
        className="add-new-task-inputs"
        onChange={handleInputChange}
      />
      <input
        type="time"
        name="startTime"
        value={taskFormData.startTime}
        placeholder="Task start time"
        className="add-new-task-inputs"
        onChange={handleInputChange}
      />
      <textarea
        type="text"
        name="description"
        value={taskFormData.description}
        placeholder="Description..."
        className="add-new-task-description-input"
        onChange={handleInputChange}
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
        <button className="add-new-button" onClick={addNewTask}>
          Add New
        </button>
      </div>
    </div>
  );
}
