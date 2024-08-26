"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
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
import { datatypes } from "@/utils/datatypes";

type FormField = {
  id: string;
  label: string;
  key: string;
  dataType: "string" | "number" | "boolean" | "enum" | "date";
  isPopoverOpen: boolean;
};

const data: FormField[] = [
  {
    id: "1",
    label: "Name",
    key: "name",
    dataType: "string",
    isPopoverOpen: false,
  },
  {
    id: "2",
    label: "Email",
    key: "email",
    dataType: "string",
    isPopoverOpen: false,
  },
  {
    id: "3",
    label: "Phone",
    key: "phone",
    dataType: "string",
    isPopoverOpen: false,
  },
  {
    id: "4",
    label: "My Boolean",
    key: "boolean",
    dataType: "boolean",
    isPopoverOpen: false,
  },
  {
    id: "5",
    label: "Date",
    key: "date",
    dataType: "date",
    isPopoverOpen: false,
  },
];

export function TempTable() {
  const [value, setValue] = useState("");
  const [form, setForm] = useState(data);

  const updateFormItem = (
    index: number,
    field: keyof FormField,
    value: any,
  ) => {
    setForm((prevForm) =>
      prevForm.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const togglePopover = (index: number) => {
    setForm((prevForm) =>
      prevForm.map((item, i) =>
        i === index ? { ...item, isPopoverOpen: !item.isPopoverOpen } : item,
      ),
    );
  };

  return (
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
          {form.map((item, index) => (
            <TableRow className="w-full border-zinc-900 text-muted-foreground hover:bg-transparent">
              <TableCell className="w-80">
                <Input
                  type="text"
                  placeholder={item.label}
                  className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  placeholder={item.key}
                  className="border border-zinc-900 bg-zinc-950 focus:ring-offset-gray-600"
                />
              </TableCell>
              <TableCell>
                <Popover
                  open={item.isPopoverOpen}
                  onOpenChange={() => togglePopover(index)}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={item.isPopoverOpen}
                      className="w-72 justify-between border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:text-white"
                    >
                      {item.dataType
                        ? datatypes.find(
                            (framework) => framework.value === item.dataType,
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
                                updateFormItem(index, "dataType", currentValue);
                                togglePopover(index);
                              }}
                              // defaultValue={item.dataType}
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
