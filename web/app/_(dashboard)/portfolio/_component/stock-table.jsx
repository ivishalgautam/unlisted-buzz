import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { rupee } from "@/hooks/Intl";

export function StockTable({ investments = [] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs">
          <TableHead>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Avg Price</TableHead>
          <TableHead>Current Price</TableHead>
          <TableHead>Investment</TableHead>
          <TableHead>Current Value</TableHead>
          <TableHead>Profit/Loss</TableHead>
          <TableHead>Profit/Loss</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investments?.map((investment, index) => {
          return (
            <TableRow key={index} className="text-xs font-medium">
              <TableCell>{investment.share_name}</TableCell>
              <TableCell>{investment.quantity}</TableCell>
              <TableCell>{rupee.format(investment.purchase_price)}</TableCell>
              <TableCell>{rupee.format(investment.share_price)}</TableCell>
              <TableCell>{rupee.format(investment.investment_value)}</TableCell>
              <TableCell className="font-semibold">
                {rupee.format(investment.current_value)}
              </TableCell>
              <TableCell
                className={
                  investment.is_loss ? "text-red-600" : "text-green-600"
                }
              >
                {`${rupee.format(
                  investment.is_loss
                    ? investment.investment_value - investment.current_value
                    : investment.current_value - investment.investment_value
                )} (${Number(investment.pnl_percent).toFixed(2)}%)`}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
