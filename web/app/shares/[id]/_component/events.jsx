import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import config from "@/config";
import { Download } from "lucide-react";

export default function EventTable({ events }) {
  return (
    <div className="container mx-auto py-10 bg-white border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>
                <Button asChild>
                  <a
                    href={`${config.file_base}/${event.details}`}
                    download
                    target="_blank"
                  >
                    <Download size={15} /> Download
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
