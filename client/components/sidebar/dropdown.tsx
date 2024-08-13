"use client";

import Avvvatars from "avvvatars-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

export function SidebarDropdown() {
  return (
    <div
      id="sidebar-dropdown"
      className="flex items-center justify-between gap-2"
    >
      <div id="dropdown-col-left" className="flex items-center gap-2">
        <div id="dropdown-image">
          <Avvvatars value="tim@apple.com" size={24} />
        </div>
        <div id="dropdown-text" className="cursor-pointer select-none">
          <span className="text-xs text-zinc-400">timi@apple.com</span>
        </div>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              id="dropdown-col-right"
              className="group cursor-pointer select-none rounded-full bg-zinc-900 p-1 transition-all hover:bg-zinc-800/30"
            >
              <Plus className="h-4 w-4 stroke-zinc-400 transition-all group-hover:stroke-zinc-300" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>New form</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
