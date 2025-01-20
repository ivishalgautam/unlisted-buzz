"use client";
import { ArrowUpDown, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import moment from "moment";
import Link from "next/link";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";

export const columns = (
  openModal,
  setId,
  setType,
  setShareType,
  setShareId
) => [
  {
    accessorKey: "share_name",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs w-64"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          QUANTITY
        </div>
      );
    },
  },
  {
    accessorKey: "purchase_price",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs w-20"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          AVG. PRICE
        </div>
      );
    },
    cell: (row) => {
      const price = row.getValue("purchase_price");
      return <div className="capitalize">{rupee.format(price)}</div>;
    },
  },
  {
    accessorKey: "share_price",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs w-20"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CURR. PRICE
        </div>
      );
    },
    cell: (row) => {
      const price = row.getValue("share_price");
      return <div className="capitalize">{rupee.format(price)}</div>;
    },
  },
  {
    accessorKey: "investment_value",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          INVESTMENT
        </div>
      );
    },
    cell: (row) => {
      const price = row.getValue("investment_value");
      return <div classprice="capitalize">{rupee.format(price)}</div>;
    },
  },
  {
    accessorKey: "current_value",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs w-24"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CURRENT VALUE
        </div>
      );
    },
    cell: (row) => {
      const value = row.getValue("current_value");
      return <div classvalue="capitalize">{rupee.format(value)}</div>;
    },
  },
  {
    accessorKey: "is_loss",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          className="text-xs"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          P&L
        </div>
      );
    },
    cell: ({ row }) => {
      const is_loss = row.original.is_loss;
      const investment_value = row.original.investment_value;
      const current_value = row.original.current_value;
      const pnl_percent = row.original.pnl_percent;
      return (
        <div
          className={cn("capitalize !text-green-500", {
            "!text-red-500": is_loss,
          })}
        >{`${is_loss ? "-" : "+"}${rupee.format(
          is_loss
            ? investment_value - current_value
            : current_value - investment_value
        )} (${Number(pnl_percent).toFixed(2)}%)`}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;
      const shareType = row.original.share_type;
      const shareId = row.original.share_id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div variant="ghost" className="h-8 w-8 p-0 text-xs">
              <div className="sr-only">Open menu</div>
              <EllipsisVertical className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                setId(id);
                openModal("newTransaction");
                setType("sell");
                setShareType(shareType);
                setShareId(shareId);
              }}
            >
              Sell
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setId(id);
                openModal("delete");
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
