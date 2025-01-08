import { Navbar } from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DEMO_STUDENTS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    coursesBought: 3,
    videosBought: 12,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    coursesBought: 2,
    videosBought: 8,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    coursesBought: 1,
    videosBought: 5,
  },
];

const Admin = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Courses Bought</TableHead>
                  <TableHead>Videos Bought</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DEMO_STUDENTS.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.coursesBought}</TableCell>
                    <TableCell>{student.videosBought}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;