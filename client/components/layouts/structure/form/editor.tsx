"use client";

import type { DataProp } from "@/types/data-prop";
import { getAPIUrl } from "@/utils/urlUtils";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import type { GetToken } from "@clerk/types";
import { useQuery } from "@tanstack/react-query";
import { TableDeleteAction } from "./editor/table-delete-action";
import { TableDrawer } from "./editor/drawer/table-drawer";
import { GenerateCodeAction } from "./editor/gen-code-action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchFields } from "@/function/fetch-fields";

export function EditorTab() {
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();

  const { isPending, isError, data, error } = useQuery<DataProp[]>({
    queryKey: ["fields"],
    queryFn: () => fetchFields(isSignedIn, isLoaded, userId, getToken),
  });

  if (isPending)
    return (
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    );

  if (isError)
    return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-4">
      <div
        id="table-container"
        className="rounded-lg border border-zinc-900 bg-zinc-950 p-4"
      >
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-zinc-900 hover:bg-zinc-900 hover:text-white">
              <TableHead className="w-[100px]">Label</TableHead>
              <TableHead>Key</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Delete</TableHead>
              <TableHead className="text-right">More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow
                className="w-full border-zinc-900 text-muted-foreground hover:bg-transparent"
                key={item.dataid}
              >
                <TableCell className="text-nowrap">
                  {item.label}
                  {/* <Input
                    type="text"
                    placeholder={item.label}
                    className="w-full border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                  /> */}
                </TableCell>
                <TableCell>
                  {item.key}
                  {/* <Input
                    type="text"
                    placeholder={item.key}
                    className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                  /> */}
                </TableCell>
                <TableCell>
                  {item.type}
                  {/* <Input
                    type="text"
                    placeholder=""
                    className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                    value={item.type}
                    disabled
                  /> */}
                </TableCell>
                <TableDeleteAction dataid={item.dataid} />
                <TableDrawer dataid={item.dataid} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <GenerateCodeAction data={data} />
    </div>
  );
}
