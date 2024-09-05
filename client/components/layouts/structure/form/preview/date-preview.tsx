"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type { DataProp } from "@/types/data-prop";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
type DateProps = {
  field: DataProp;
};

export function DatePreview(props: DateProps) {
  const [date, setDate] = useState<Date>();
  const { field } = props;
  const { key, label, description } = field;
  return (
    <div className="">
      <hgroup>
        <Label
          className="text-sm font-medium text-muted-foreground"
          htmlFor={field.key}
        >
          {label}
        </Label>
      </hgroup>
      <div id="date-group" className="flex flex-col gap-2">
        <div id="date">
          <Popover key={key}>
            <PopoverTrigger
              asChild
              className="border border-zinc-800 bg-zinc-900 hover:bg-zinc-900/80 hover:text-muted-foreground focus:bg-zinc-900/80"
            >
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </p>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto border-zinc-900 bg-zinc-950 p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="text-white"
              />
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
