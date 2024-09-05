import type { TableType } from "@/types/T-Table";
import { flexRender } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableContentProps<TData, TValue> = {
  table: TableType<TData>;
  columns: ColumnDef<TData, TValue>[];
};
export function TableContent<TData, TValue>({
  table,
  columns,
}: TableContentProps<TData, TValue>) {
  return (
    <div className="rounded-md border border-zinc-900 bg-zinc-950 shadow-lg">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="rounded border-b border-zinc-900 text-zinc-400 hover:bg-zinc-950 hover:text-zinc-100 hover:shadow-xl data-[state=selected]:bg-zinc-950 data-[state=selected]:text-zinc-100 data-[state=selected]:shadow-xl"
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent focus:bg-transparent">
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
