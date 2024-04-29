import React from "react";

const SectionTasks = ({
  handleDrop,
  tasks,
  id,
  color,
}: {
  handleDrop: React.DragEventHandler<HTMLDivElement>;
  tasks: string[];
  id: string;
  color: string;
}) => {
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
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
            e.dataTransfer.setData("text", e.currentTarget.innerText)
          }
          className="flex justify-center mb-4"
        >
          <p
            className={`cursor-grab flex justify-center items-center gap-2 break-all text-slate-50 bg-slate-800 rounded p-2 w-60 border-l-8 border-${color}-500`}
          >
            {todo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionTasks;
