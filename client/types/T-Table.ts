import { ColumnDef } from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};
export type TableType<TData> = ReturnType<typeof useReactTable<TData>>;
