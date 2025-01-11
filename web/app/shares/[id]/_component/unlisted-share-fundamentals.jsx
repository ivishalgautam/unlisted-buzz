import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function UnlistedShareFundamentals({ data }) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Revenue (TTM)</TableCell>
          <TableCell>{data.revenue}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Net Income (TTM)</TableCell>
          <TableCell>{data.netIncome}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">EPS (TTM)</TableCell>
          <TableCell>${data.eps.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Debt to Equity</TableCell>
          <TableCell>{data.debtToEquity.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Current Ratio</TableCell>
          <TableCell>{data.currentRatio.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Quick Ratio</TableCell>
          <TableCell>{data.quickRatio.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Return on Equity</TableCell>
          <TableCell>{data.roe.toFixed(2)}%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
