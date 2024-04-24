import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./components/ui/input";

const App = () => {
  return (
    <main>
      <header className="bg-gray-800 flex h-16 items-center text-slate-50 justify-between sm:px-16 px-5 py-3">
        <h1 className="sm:block hidden">Tasks - Carlos</h1>
        <form className="flex justify-between sm:w-80 w-full space-x-2">
          <Input className="text-gray-800 max-w-sm" type="text" placeholder="Task" />
          <Input className="text-gray-800 max-w-14 text-center" type="submit" value="Add" />
        </form>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Todo</TableHead>
            <TableHead className="text-center">Doing</TableHead>
            <TableHead className="text-center">Done</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">Exemple1</TableCell>
            <TableCell className="text-center">Exemple2</TableCell>
            <TableCell className="text-center">Exemple3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default App;
