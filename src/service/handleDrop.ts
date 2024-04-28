import { ITasks } from "@/interfaces";

const handleDrop = (
  e: React.DragEvent,
  tasks: ITasks,
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>
) => {
  const text = e.dataTransfer.getData("text");

  const filterTodo = Boolean(tasks.todo.filter((todo) => todo === text)[0]);
  const filterDoing = Boolean(tasks.doing.filter((doing) => doing === text)[0]);
  const filterDone = Boolean(tasks.done.filter((done) => done === text)[0]);

  if (filterTodo && e.currentTarget.id !== "todo") {
    const todoAtt = tasks.todo.filter((todo) => todo !== text);
    e.currentTarget.id === "doing"
      ? setTasks({
          todo: [...todoAtt],
          doing: [...tasks.doing, text],
          done: [...tasks.done],
        })
      : setTasks({
          todo: [...todoAtt],
          doing: [...tasks.doing],
          done: [...tasks.done, text],
        });
  } else if (filterDoing && e.currentTarget.id !== "doing") {
    const doingAtt = tasks.doing.filter((todo) => todo !== text);

    e.currentTarget.id === "todo"
      ? setTasks({
          todo: [...tasks.todo, text],
          doing: [...doingAtt],
          done: [...tasks.done],
        })
      : setTasks({
          todo: [...tasks.todo],
          doing: [...doingAtt],
          done: [...tasks.done, text],
        });
  } else if (filterDone && e.currentTarget.id !== "done") {
    const doneAtt = tasks.done.filter((todo) => todo !== text);
    e.currentTarget.id === "todo"
      ? setTasks({
          todo: [...tasks.todo, text],
          doing: [...tasks.doing],
          done: [...doneAtt],
        })
      : setTasks({
          todo: [...tasks.todo],
          doing: [...tasks.doing, text],
          done: [...doneAtt],
        });
  }
};

export default handleDrop;
