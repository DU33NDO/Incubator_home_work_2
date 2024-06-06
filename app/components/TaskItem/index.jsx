import React from "react";
import XIcon from "../XIcon";

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <div>
      <div className="bg-slate-500 mt-4 relative flex items-center gap-8 px-5 py-1">
        <input
          className="w-7 h-7 text-center"
          type="checkbox"
          name="checkTask"
          id={`checkTask-${task.id}`}
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <p
          className={`px-5 py-3 text-white max-w-[150ch] break-words whitespace-normal ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.text}
        </p>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="ml-auto text-red-500 hover:text-red-700"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
