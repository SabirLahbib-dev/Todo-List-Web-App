import { Header } from "./components/Header";
import { Switcher } from "./components/Switcher";
import { TasksGrid } from "./components/TasksGrid";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* Main content of the app can go here */}
      <main className="main-content">
        <Switcher />
        <TasksGrid />
      </main>
    </>
  );
}

export default App;
