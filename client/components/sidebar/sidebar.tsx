import Link from "next/link";
import { SidebarLogo } from "./logo";
import { SidebarDropdown } from "./dropdown";
import {
  Folder,
  Blocks,
  Search,
  Home,
  Inbox,
  Settings,
  FileText,
  Trash2,
  CircleHelp,
} from "lucide-react";

export function Sidebar() {
  return (
    <>
      <div
        id="sidebar"
        className="fixed left-0 top-0 z-10 h-full w-full max-w-[16rem] border-r border-zinc-800 bg-zinc-950"
      >
        <div id="sidebar-content" className="flex flex-col gap-5 p-5">
          <SidebarLogo />
          <SidebarDropdown />
          <div id="sideabr-links" className="flex flex-col gap-2">
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Search
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Search
                </span>
              </div>
              <div id="link--shortcut">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Folder
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Open
                </span>
              </div>
              <div id="link--shortcut">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>O
                </kbd>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Home
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Home
                </span>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Inbox
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Inbox
                </span>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Settings
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Settings
                </span>
              </div>
            </Link>
          </div>
          <div id="sideabr-links" className="flex flex-col gap-2">
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Blocks
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Components
                </span>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <FileText
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Docs
                </span>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Trash2
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Trash
                </span>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="group flex items-center justify-between gap-2 rounded-md p-1 px-2 transition-all hover:bg-zinc-900"
            >
              <div id="link--text" className="flex items-center gap-2">
                <CircleHelp
                  className="h-4 w-4 stroke-zinc-400 group-hover:stroke-white"
                  stroke="#fff"
                />
                <span className="text-sm text-zinc-400 group-hover:text-white">
                  Help
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ====== Command Palette ====== */}
      {/* ====== Form Builder ====== */}
    </>
  );
}
