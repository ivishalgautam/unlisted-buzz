import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function UnlistedShareDetails({ data }) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Current Price</TableCell>
          <TableCell>${data.currentPrice.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Change</TableCell>
          <TableCell
            className={data.change >= 0 ? "text-green-600" : "text-red-600"}
          >
            ${data.change.toFixed(2)} ({data.changePercentage.toFixed(2)}%)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Market Cap</TableCell>
          <TableCell>{data.marketCap}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Volume</TableCell>
          <TableCell>{data.volume}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">P/E Ratio</TableCell>
          <TableCell>{data.peRatio.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Dividend</TableCell>
          <TableCell>{data.dividend}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
