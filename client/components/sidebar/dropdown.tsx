"use client";

import Avvvatars from "avvvatars-react";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Plus,
  ChevronDown,
  User,
  Users,
  CreditCard,
  Keyboard,
  LifeBuoy,
  Cloud,
  LogOut,
  Github,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
} from "lucide-react";

export function SidebarDropdown() {
  return (
    <div
      id="sidebar-dropdown"
      className="flex items-center justify-between gap-2"
    >
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="group w-full cursor-pointer select-none focus:border-none focus:outline-none"
        >
          <div id="dropdown-col-left" className="flex items-center gap-2">
            <div id="dropdown-image">
              <Avvvatars value="tim@apple.com" size={24} />
            </div>
            <div id="dropdown-text" className="flex items-center gap-1">
              <span className="text-xs text-zinc-400">timi@apple.com</span>
              <span>
                <ChevronDown className="h-4 w-4 stroke-zinc-400 transition-all group-data-[state=open]:rotate-180" />
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 border-zinc-900 bg-zinc-950 shadow-xl">
          <DropdownMenuLabel className="text-white">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-900" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-zinc-900" />
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="text-white focus:bg-zinc-900 focus:text-white"
              disabled
            >
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-white focus:bg-zinc-900 focus:text-white"
              disabled
            >
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-zinc-900" />
          <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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
