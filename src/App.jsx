import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Switcher } from "./components/Switcher";
import { TasksGrid } from "./components/TasksGrid";
import { AddNewTaskForm } from "./components/AddNewTaskForm";
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
  const [isActiveTasks, setIsActiveTasks] = useState(true);

  // store the active tasks
  useEffect(() => {
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  }, [activeTasks]);

  // store the completed tasks
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  // To observe changes on global states
  console.log("Active tasks", activeTasks);
  console.log("completed tasks", completedTasks);

  return (
    <>
      <Header
        setIsAddingNewTask={setIsAddingNewTask}
        activeTasks={activeTasks}
      />
      <main className="main-content">
        <Switcher
          isActiveTasks={isActiveTasks}
          setIsActiveTasks={setIsActiveTasks}
        />
        <TasksGrid
          activeTasks={activeTasks}
          setActiveTasks={setActiveTasks}
          setCompletedTasks={setCompletedTasks}
          completedTasks={completedTasks}
          isActiveTasks={isActiveTasks}
        />
      </main>
      <AddNewTaskForm
        isAddingNewTask={isAddingNewTask}
        setIsAddingNewTask={setIsAddingNewTask}
        setActiveTasks={setActiveTasks}
      />
    </>
  );
}

export default App;
