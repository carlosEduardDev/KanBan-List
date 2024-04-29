import React from "react";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "./components/ui/input";
import { ITasks } from "./interfaces";
import SectionTasks from "./components/Section";
import handleDrop from "./service/handleDrop";

const App = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [taskContent, setTaskContent] = React.useState("");
  const [tasks, setTasks] = React.useState<ITasks>({
    todo: [],
    doing: [],
    done: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      taskContent &&
      !tasks.todo.filter((todo) => todo === taskContent)[0] &&
      inputRef.current
    ) {
      setTasks({
        todo: [...tasks.todo, taskContent],
        doing: [...tasks.doing],
        done: [...tasks.done],
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <main>
      <header className="bg-gray-800 flex h-16 items-center text-slate-50 justify-between sm:px-16 px-5 py-3">
        <h1 className="sm:block hidden">
          Pending tasks: {tasks.todo.length + tasks.doing.length}
        </h1>
        <form
          className="flex justify-between sm:w-80 w-full space-x-2"
          onSubmit={handleSubmit}
        >
          <Input
            className="text-gray-800 max-w-sm"
            type="text"
            placeholder="Enter your task..."
            ref={inputRef}
            onChange={(e) => setTaskContent(e.target.value)}
          />
          <Input
            className="text-gray-800 max-w-14 text-center"
            type="submit"
            value="add"
          />
        </form>
      </header>
      <Table>
        <TableHeader>
          <TableRow className="grid grid-cols-3">
            <TableHead className="flex items-center justify-center">
              Pending
            </TableHead>
            <TableHead className="flex items-center justify-center">
              Doing
            </TableHead>
            <TableHead className="flex items-center justify-center">
              Done
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <section className="grid w-full grid-cols-3 justify-between">
        <SectionTasks
          handleDrop={(e) => handleDrop(e, tasks, setTasks)}
          tasks={tasks.todo}
          id="todo"
          color="red"
        />
        <SectionTasks
          handleDrop={(e) => handleDrop(e, tasks, setTasks)}
          tasks={tasks.doing}
          id="doing"
          color="yellow"
        />
        <SectionTasks
          handleDrop={(e) => handleDrop(e, tasks, setTasks)}
          tasks={tasks.done}
          id="done"
          color="green"
        />
      </section>
    </main>
  );
};

export default App;
