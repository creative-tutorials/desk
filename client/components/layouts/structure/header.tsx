import Link from "next/link";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-zinc-950 p-4 px-8">
      <div id="header-cols" className="flex items-center gap-6">
        <div id="col-left">
          <Link href="/">
            <h4 className="text-lg font-semibold text-white">Logo</h4>
          </Link>
        </div>
        <div id="col-right">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/"
                className="rounded-full bg-transparent p-1 px-4 text-sm text-muted-foreground transition-all hover:bg-neutral-900 hover:text-white"
              >
                Enterprise
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="rounded-full bg-transparent p-1 px-4 text-sm text-muted-foreground transition-all hover:bg-neutral-900 hover:text-white"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="rounded-full bg-transparent p-1 px-4 text-sm text-muted-foreground transition-all hover:bg-neutral-900 hover:text-white"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="rounded-full bg-transparent p-1 px-4 text-sm text-muted-foreground transition-all hover:bg-neutral-900 hover:text-white"
              >
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="header-end">
        <Button variant={"link"} className="text-muted-foreground">
          Contact
        </Button>
        <Button>Sign in</Button>
      </div>
    </header>
  );
}
