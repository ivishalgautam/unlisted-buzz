import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export default function PromoterOrManagementTable({ data }) {
  return (
    <div className="container mx-auto py-10">
      <div className="overflow-x-auto bg-white border rounded-lg p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead className="text-right">LinkedIn</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((employee, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.designation}</TableCell>
                <TableCell>{employee.experience}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="default" type="button" size="sm">
                    <a
                      href={employee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Profile
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
