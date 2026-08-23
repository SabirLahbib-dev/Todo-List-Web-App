import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Switcher } from "./components/Switcher";
import { TasksGrid } from "./components/TasksGrid";
import { AddNewTaskForm } from "./components/AddNewTaskForm";
import "./App.css";

function App() {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  const [activeTasks, setActiveTasks] = useState(
    JSON.parse(localStorage.getItem("activeTasks")) || [],
  );

  // const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  }, [activeTasks]);

  console.log(activeTasks);

  return (
    <>
      <Header
        setIsAddingNewTask={setIsAddingNewTask}
        activeTasks={activeTasks}
      />
      <main className="main-content">
        <Switcher />
        <TasksGrid activeTasks={activeTasks} />
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
