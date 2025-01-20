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
import { Button } from "@/components/ui/button";
import { rupee } from "@/hooks/Intl";
import { cn } from "@/lib/utils";
import moment from "moment";

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
        <span variant="ghost" className="text-xs w-64">
          NAME
        </span>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          TYPE
        </span>
      );
    },
    cell: (row) => {
      const type = row.getValue("type");
      return <div className="capitalize">{type}</div>;
    },
  },
  {
    accessorKey: "share_type",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          SHARE TYPE
        </span>
      );
    },
    cell: (row) => {
      const share_type = row.getValue("share_type");
      return <div className="capitalize">{share_type}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          QUANTITY
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          TRANSACTION DATE
        </span>
      );
    },
    cell: ({ row }) => {
      return moment(row.getValue("date")).format("MMM DD, YYYY");
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          PRICE
        </span>
      );
    },
    cell: (row) => {
      const price = row.getValue("price");
      return <div classprice="capitalize">{rupee.format(price)}</div>;
    },
  },
  {
    accessorKey: "total_value",
    header: ({ column }) => {
      return (
        <span variant="ghost" className="text-xs">
          TOTAL
        </span>
      );
    },
    cell: (row) => {
      const total = row.getValue("total_value");
      return <div classtotal="capitalize">{rupee.format(total)}</div>;
    },
  },
];
