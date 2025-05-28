import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleTask = (task) => {
    console.log(task, "task");
    setTasks([...tasks, task]);
  };
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };
  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <TaskInput taskInput={handleTask} onCLick={handleDelete} />
      <TaskList tasklist={tasks} />
    </div>
  );
}

export default App;
