import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function UnlistedShareFundamentals({ fundametals = [] }) {
  return (
    <Table>
      <TableBody>
        {fundametals.map((ele, ind) => (
          <TableRow key={ind}>
            <TableCell className="font-medium">{ele.key}</TableCell>
            <TableCell>{ele.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
