import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Switcher } from "./components/Switcher";
import { TasksGrid } from "./components/TasksGrid";
import { AddNewTaskForm } from "./components/AddNewTaskForm";
import { ModifyTaskForm } from "./components/ModifyTaskForm";
import "./App.css";

function App() {
  // state for adding new task form
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  // active tasks
  const [activeTasks, setActiveTasks] = useState(
    JSON.parse(localStorage.getItem("activeTasks")) || [],
  );

  // completed tasks
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(localStorage.getItem("completedTasks")) || [],
  );

  // state for switcher, to give the user the ability to switch between active tasks and completed tasks
  const [isActiveTasksViewMode, setIsActiveTasksViewMode] = useState(true);

  // store the active tasks
  useEffect(() => {
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  }, [activeTasks]);

  // store the completed tasks
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  // state for search feature
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  // state for the selected date
  const [selectedDate, setSelectedDate] = useState("");

  const allTasks = [...activeTasks, ...completedTasks];

  const allDates = allTasks.map((task) => task.date);

  const availableDates = Array.from(new Set(allDates)).sort().reverse();

  const validSelectedDate =
    availableDates.length === 0
      ? ""
      : !selectedDate || !availableDates.includes(selectedDate)
        ? availableDates[0]
        : selectedDate;

  // state for the modify task form
  const [isModifyingTask, setIsModifyingTask] = useState(false);

  const [taskToModify, setTaskToModify] = useState(null);

  return (
    <>
      <Header
        setIsAddingNewTask={setIsAddingNewTask}
        activeTasks={activeTasks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchParams={setSearchParams}
        availableDates={availableDates}
        selectedDate={validSelectedDate}
        setSelectedDate={setSelectedDate}
      />
      <main className="main-content">
        <Switcher
          isActiveTasksViewMode={isActiveTasksViewMode}
          setIsActiveTasksViewMode={setIsActiveTasksViewMode}
        />
        <TasksGrid
          activeTasks={activeTasks}
          setActiveTasks={setActiveTasks}
          setCompletedTasks={setCompletedTasks}
          completedTasks={completedTasks}
          isActiveTasksViewMode={isActiveTasksViewMode}
          searchTerm={searchTerm}
          selectedDate={validSelectedDate}
          setIsModifyingTask={setIsModifyingTask}
          setTaskToModify={setTaskToModify}
        />
      </main>
      <AddNewTaskForm
        isAddingNewTask={isAddingNewTask}
        setIsAddingNewTask={setIsAddingNewTask}
        setActiveTasks={setActiveTasks}
      />
      <ModifyTaskForm
        isModifyingTask={isModifyingTask}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
        taskToModify={taskToModify}
        setActiveTasks={setActiveTasks}
        isActiveTasksViewMode={isActiveTasksViewMode}
        setCompletedTasks={setCompletedTasks}
      />
    </>
  );
}

export default App;
