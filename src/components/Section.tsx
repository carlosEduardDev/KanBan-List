import { ISection } from "@/interfaces";
import React from "react";

const SectionTasks = ({ color, handleDrop, tasks, id, setTasks }: ISection) => {
  const handleDblClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const task = e.currentTarget.innerText;
    const deleteTask = confirm("Do you want to delete the task?");
    deleteTask &&
      setTasks((prev) => {
        return {
          doing: [...prev.doing.filter((doing) => doing !== task)],
          done: [...prev.done.filter((done) => done !== task)],
          todo: [...prev.todo.filter((todo) => todo !== task)],
        };
      });
  };

  return (
    <div
      className="overflow-auto sm:block grid grid-cols-2 gap-1 py-5 px-2 min-h-[30vh] max-h-[30vh] sm:max-h-[83vh] sm:min-h-[83vh] text-center sm:border-r-2 border-b-2 borde-slate-300"
      id={id}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e: React.DragEvent) => e.preventDefault()}
    >
      {tasks.map((todo, i) => (
        <div
          key={i}
          onDoubleClick={handleDblClick}
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
            e.dataTransfer.setData("text", e.currentTarget.innerText)
          }
          className="flex justify-center mb-4 self-start"
        >
          <p
            style={{ borderLeftColor: color }}
            className="sm:text-base text-xs cursor-grab flex justify-center items-center gap-2 text-slate-50 bg-slate-800 rounded p-2 w-60 border-l-8 overflow-hidden"
          >
            {todo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionTasks;
