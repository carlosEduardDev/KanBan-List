import React from "react";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "./components/ui/input";
import { ITasks } from "./interfaces";

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
        <h1 className="sm:block hidden">Tasks - Carlos</h1>
        <form
          className="flex justify-between sm:w-80 w-full space-x-2"
          onSubmit={handleSubmit}
        >
          <Input
            className="text-gray-800 max-w-sm"
            type="text"
            placeholder="Task"
            ref={inputRef}
            onChange={(e) => setTaskContent(e.target.value)}
          />
          <Input
            className="text-gray-800 max-w-14 text-center"
            type="submit"
            value="Add"
          />
        </form>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Pending</TableHead>
            <TableHead className="text-center">Doing</TableHead>
            <TableHead className="text-center">Done</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <section className="grid w-full grid-cols-3 justify-between">
        <div className="overflow-auto py-5 px-2 max-h-[83vh] min-h-[83vh] text-center border-r-2 border-slate-300">
          {tasks &&
            tasks.todo.map((todo) => (
              <div
                key={crypto.randomUUID()}
                className="flex justify-center mb-4"
              >
                <p className="break-all text-slate-50 bg-slate-800 rounded p-2 w-60">
                  {todo}
                </p>
              </div>
            ))}
        </div>

        <div className="overflow-auto py-5 px-2 max-h-[83vh] min-h-[83vh] text-center border-r-2 border-slate-300">
          {tasks &&
            tasks.doing.map((doing) => (
              <div
                key={crypto.randomUUID()}
                className="flex justify-center mb-4"
              >
                <p className="break-all text-slate-50 bg-slate-800 rounded p-2 w-60">
                  {doing}
                </p>
              </div>
            ))}
        </div>

        <div className="overflow-auto py-5 px-2 max-h-[83vh] min-h-[83vh] text-center">
          {tasks &&
            tasks.done.map((done) => (
              <div
                key={crypto.randomUUID()}
                className="flex justify-center mb-4"
              >
                <p className="break-all text-slate-50 bg-slate-800 rounded p-2 w-60">
                  {done}
                </p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default App;
