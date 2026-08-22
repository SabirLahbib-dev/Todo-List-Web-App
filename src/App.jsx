import { useState } from "react";
import { Header } from "./components/Header";
import { Switcher } from "./components/Switcher";
import { TasksGrid } from "./components/TasksGrid";
import { AddNewTaskForm } from "./components/AddNewTaskForm";
import "./App.css";

function App() {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  return (
    <>
      <Header setIsAddingNewTask={setIsAddingNewTask} />

      {/* Main content of the app can go here */}
      <main className="main-content">
        <Switcher />
        <TasksGrid />
      </main>
      <AddNewTaskForm
        isAddingNewTask={isAddingNewTask}
        setIsAddingNewTask={setIsAddingNewTask}
      />
    </>
  );
}

export default App;
