import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Response } from "@/types/TResponse";

async function getData(): Promise<Response[]> {
  // Fetch data from your API here.
  return [
    {
      userid: "728ed52f",
      username: "johndoe_1",
      firstname: "John",
      lastname: "Doe",
      response: "Thanks for your submission!",
    },
    {
      userid: "489e1d42",
      username: "alice_1",
      firstname: "Alice",
      lastname: "Jenna",
      response: "There are some issues with your submission.",
    },
    {
      userid: "8f7e1d42",
      username: "bob_1",
      firstname: "Bob",
      lastname: "Smith",
      response: "The site performance is not good.",
    },
    {
      userid: "c4e1d42",
      username: "charlie_1",
      firstname: "Charlie",
      lastname: "Brown",
      response: "The site is not responsive.",
    },
    // ...
  ];
}

export async function Submissions() {
  const data = await getData();

  return (
    <div id="submission-table" className="my-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
