"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { datatypes } from "@/utils/datatypes";

export function FloatMenu() {
  const data = datatypes;

  const toggleContainer = () => {
    const container: HTMLElement | null = document.getElementById("container");
    const floatMenu: HTMLElement | null = document.getElementById("float-menu");
    if (!container || !floatMenu) return;

    const state = container.getAttribute("data-state");
    const floatMenuState = floatMenu.getAttribute("data-state");
    if (state === "open" && floatMenuState === "closed") {
      container.setAttribute("data-state", "closed");
      floatMenu.setAttribute("data-state", "open");
    } else {
      container.setAttribute("data-state", "open");
      floatMenu.setAttribute("data-state", "closed");
    }
  };

  return (
    <>
      <div
        id="container"
        data-state="closed"
        className="pointer-events-none fixed bottom-0 right-2 z-50 w-full max-w-xs rounded-xl border border-zinc-900 bg-zinc-950 p-4 opacity-0 transition-all duration-500 data-[state=open]:pointer-events-auto data-[state=open]:bottom-20 data-[state=open]:opacity-100"
      >
        <div id="cont-wrapp" className="flex flex-col gap-3">
          <hgroup>
            <h2 className="text-lg font-medium text-white">Add Field</h2>
          </hgroup>
          <div id="button-group" className="flex flex-col gap-2">
            {data.map((item, index) => (
              <Button key={index}>{item.label}</Button>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-2 z-50">
        <div
          id="float-menu"
          data-state="closed"
          className="cursor-pointer rounded-full bg-neutral-100/10 p-2 backdrop-blur-md transition-all hover:bg-neutral-100 data-[state=closed]:rotate-45"
          onClick={toggleContainer}
        >
          <Plus className="h-6 w-6" />
        </div>
      </div>
    </>
  );
}
