import React, { useState } from "react";

const TaskInput = ({ taskInput }) => {
  const [task, setTask] = useState("");

  const onAddClick = () => {
    taskInput(task);
    setTask("");
  };
  return (
    <div className=" mb-4 mt-4 bg-sky-100 p-4 rounded">
      <label className="text-sky-600 font-bold text-lg mb-2 block text-center">
        Task Input{" "}
      </label>
      <div className="flex gap-2 items-center">
        <input
          className="flex-1 border px-2 py-1 rounded"
          placeholder="Enter Task"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="bg-sky-500 text-white px-2 py-1 rounded self-center"
          onClick={() => onAddClick()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
