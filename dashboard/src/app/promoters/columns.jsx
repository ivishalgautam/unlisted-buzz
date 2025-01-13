"use client";
import { Button } from "../../components/ui/button";
import { ArrowUpDown, Link2 } from "lucide-react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import moment from "moment";
import TableImage from "@/components/ui/table-image";
import Link from "next/link";
import { RiAttachment2 } from "@remixicon/react";
import config from "@/config";

export const columns = (openModal, setId) => [
  {
    accessorKey: "name", // Key for the promoter's name
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (row) => {
      const name = row.getValue("name");
      return <div className="capitalize">{name}</div>;
    },
  },
  {
    accessorKey: "designation", // Key for the promoter's designation
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DESIGNATION
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (row) => {
      const designation = row.getValue("designation");
      return <div>{designation}</div>;
    },
  },
  {
    accessorKey: "experience", // Key for the promoter's experience
    header: "EXPERIENCE",
    cell: (row) => {
      const experience = row.getValue("experirence");
      return <div>{experience} years</div>;
    },
  },
  {
    accessorKey: "linkedin", // Key for the promoter's LinkedIn profile
    header: "LINKEDIN",
    cell: (row) => {
      const linkedin = row.getValue("linkedin");
      return (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Link2 />
        </a>
      );
    },
  },
  {
    id: "actions", // Custom column for actions
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/promoters/edit/${id}`}>Edit</Link>
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
