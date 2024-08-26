import { useState } from "react";

import Link from "next/link";
import { Header } from "@/components/layouts/structure/header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, Trash2 } from "lucide-react";

const datatypes = [
  {
    value: "string",
    label: "String",
  },
  {
    value: "number",
    label: "Number",
  },
  {
    value: "boolean",
    label: "Boolean",
  },
  {
    value: "enum",
    label: "Enum",
  },
  {
    value: "date",
    label: "Date",
  },
];

export function TempContent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <section className="mt-20 flex flex-col gap-14 p-8">
      <hgroup className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-5xl font-semibold text-white">
          Desk form builder for your applcations
        </h1>
        <p className="text-lg text-muted-foreground">
          Generate your own form with the Desk form builder, and reuse it in
          your applications.
        </p>
      </hgroup>
      <div
        id="table-container"
        className="rounded-lg border border-zinc-900 bg-zinc-950 p-4"
      >
        <Table className="w-full">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="">
            <TableRow className="border-zinc-900 hover:bg-zinc-900 hover:text-white">
              <TableHead className="w-[100px]">Label</TableHead>
              <TableHead>Key</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Delete</TableHead>
              <TableHead className="text-right">More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="w-full border-zinc-900 text-muted-foreground hover:bg-transparent">
              <TableCell className="w-80">
                <Input
                  type="text"
                  placeholder="label"
                  className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  placeholder="key"
                  className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                />
              </TableCell>
              <TableCell>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-72 justify-between border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:text-white"
                    >
                      {value
                        ? datatypes.find(
                            (framework) => framework.value === value,
                          )?.label
                        : "Select data type..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] border border-zinc-900 bg-transparent p-0">
                    <Command className="border border-zinc-900 bg-zinc-950">
                      <CommandInput placeholder="Search types..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {datatypes.map((framework) => (
                            <CommandItem
                              className="text-white hover:bg-zinc-900 data-[selected='true']:bg-zinc-900 data-[selected=true]:text-white"
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue,
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell className="">
                <Button>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="">
                <Button>
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
