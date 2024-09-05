import { useReactTable } from "@tanstack/react-table";
import type { TableType } from "@/types/T-Table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TableFilterProps<TData> = {
  table: TableType<TData>;
};

export function TableFilter<TData>({ table }: TableFilterProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter usernames..."
        autoFocus
        autoComplete="off"
        value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("username")?.setFilterValue(event.target.value)
        }
        className="max-w-sm border border-zinc-900 bg-zinc-950 text-white transition-all focus:ring-offset-slate-600"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto border-zinc-900 bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
          >
            Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="rounded-md border border-zinc-900 bg-zinc-950 shadow-lg"
        >
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize text-zinc-400 focus:bg-zinc-900 focus:text-zinc-100"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
