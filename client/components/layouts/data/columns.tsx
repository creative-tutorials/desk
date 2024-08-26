"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Response } from "@/types/TResponse";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<Response>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-zinc-400 data-[state=checked]:border-zinc-800"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-zinc-400 hover:shadow-xl focus:bg-zinc-900 focus:text-zinc-100"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "response",
    header: "Response",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-8 w-8 border border-zinc-800 bg-zinc-900 p-0 hover:bg-zinc-800 hover:text-white"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="round-md border border-zinc-900 bg-zinc-950 shadow-lg">
          <DropdownMenuLabel className="text-white">Actions</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-900" />
          <DropdownMenuItem className="text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100">
            Approve
          </DropdownMenuItem>
          <DropdownMenuItem className="text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100">
            Reject
          </DropdownMenuItem>
          <DropdownMenuItem className="text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
