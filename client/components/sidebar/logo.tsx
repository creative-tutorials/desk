import Link from "next/link";

export function SidebarLogo() {
  return (
    <div id="logo">
      <Link href="/">
        <div id="logo--text" className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Desk</span>
          <sup className="text-xs text-slate-200">beta</sup>
        </div>
      </Link>
    </div>
  );
}
