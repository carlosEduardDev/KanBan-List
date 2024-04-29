import { ITasks } from "@/interfaces";

const handleDrop = (
  e: React.DragEvent,
  tasks: ITasks,
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>
) => {
  const text = e.dataTransfer.getData("text");

  switch (e.currentTarget.id) {
    case "todo":
      setTasks({
        todo: [...tasks.todo.filter((todo) => todo !== text), text],
        doing: [...tasks.doing.filter((doing) => doing !== text)],
        done: [...tasks.done.filter((done) => done !== text)],
      });
      break;
    case "doing":
      setTasks({
        todo: [...tasks.todo.filter((todo) => todo !== text)],
        doing: [...tasks.doing.filter((doing) => doing !== text), text],
        done: [...tasks.done.filter((done) => done !== text)],
      });
      break;
    case "done":
      setTasks({
        todo: [...tasks.todo.filter((todo) => todo !== text)],
        doing: [...tasks.doing.filter((doing) => doing !== text)],
        done: [...tasks.done.filter((done) => done !== text), text],
      });
      break;
  }
};

export default handleDrop;
