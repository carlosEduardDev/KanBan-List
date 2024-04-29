import { ISection } from "@/interfaces";
import React from "react";

const SectionTasks = ({ color, handleDrop, tasks, id, setTasks }: ISection) => {
  const handleDblClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const task = e.currentTarget.innerText;

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
      className="overflow-auto py-5 px-2 max-h-[83vh] min-h-[83vh] text-center border-r-2 borde-slate-300"
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
          className="flex justify-center mb-4"
        >
          <p
            style={{ borderLeftColor: color }}
            className="cursor-grab flex justify-center items-center gap-2 break-all text-slate-50 bg-slate-800 rounded p-2 w-60 border-l-8"
          >
            {todo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionTasks;
