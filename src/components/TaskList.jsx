import React from "react";

const TaskList = ({ tasklist }) => {
  return (
    <ul className="space-y-2">
      {tasklist.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-100 p-2 rounded"
        >
          <span className="text-gray-800">{task}</span>
          <button className="bg-red-500 text-white px-2 py-1 rounded">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
