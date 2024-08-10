import { Folder, Download, Zap, HelpCircle, Trash2, LogIn } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        id="sidebar"
        className="fixed top-0 left-0 h-full w-full max-w-[16rem] border-r border-zinc-800 bg-zinc-950"
      >
        <div id="sidebar-content" className="p-5">
          <div id="logo">
            <Link href="/">
              <div id="logo--text" className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">Desk</span>
                <sup className="text-xs text-slate-200">beta</sup>
              </div>
            </Link>
          </div>
          <div id="sideabr-links" className="flex flex-col gap-4">
            <Link
              href="/open"
              id="link"
              className="flex items-center justify-between gap-2 bg-zinc-900 p-2 rounded-md"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Folder className="h-4 w-4" stroke="#fff" />
                <span className="text-sm text-slate-200">Open</span>
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
              className="flex items-center justify-between gap-2 bg-zinc-900 p-2 rounded-md"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Download className="h-4 w-4" stroke="#fff" />
                <span className="text-sm text-slate-200">Download</span>
              </div>
              <div id="link--shortcut">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>D
                </kbd>
              </div>
            </Link>
            <Link
              href="#"
              id="link"
              className="flex items-center justify-between gap-2 bg-zinc-900 p-2 rounded-md"
            >
              <div id="link--text" className="flex items-center gap-2">
                <Zap className="h-4 w-4" stroke="#fff" />
                <span className="text-sm text-slate-200">Command palette</span>
              </div>
              <div id="link--shortcut">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section id="content"></section>
    </main>
  );
}
