import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const App = () => {
  return (
    <main>
      <Table>
        <TableCaption>Kanban task list</TableCaption>
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
