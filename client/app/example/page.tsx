"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-4">
        <div id="input">
          <Label
            className="text-sm font-medium text-muted-foreground"
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            id="email"
            placeholder="Email"
            className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
          />
        </div>
        <p className="text-sm text-muted-foreground">Enter email address</p>
        <div
          id="boolean-field"
          className="flex w-full items-center justify-between rounded-md border border-zinc-900 p-4"
        >
          <hgroup>
            <h3 className="text-lg text-white">Terms and Condtions</h3>
            <p className="text-sm text-muted-foreground">
              Accept our terms and conditions
            </p>
          </hgroup>
          <div id="switch">
            <Switch className="bg-zinc-900" id="terms" />
          </div>
        </div>
        <div id="date-field">
          <hgroup>
            <Label
              className="text-sm font-medium text-muted-foreground"
              htmlFor="date"
            >
              Date
            </Label>
          </hgroup>
          <div id="date-group" className="flex flex-col gap-2">
            <div id="date">
              <Popover>
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
            <p className="text-sm text-muted-foreground">Select your date</p>
          </div>
        </div>
        <div id="number-field" className="flex flex-col gap-2">
          <div id="input">
            <Label
              className="text-sm font-medium text-muted-foreground"
              htmlFor="age"
            >
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Age"
              className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
            />
          </div>
          <p className="text-sm text-muted-foreground">Enter your age</p>
        </div>
      </div>
    </div>
  );
}
