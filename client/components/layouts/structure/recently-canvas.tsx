import { Clock } from "lucide-react";
import { RecentList } from "./recent-list";

export function RecentlyCanvas() {
  return (
    <div id="recently-canvas">
      <hgroup>
        <h2 className="flex items-center gap-2 text-sm text-zinc-400">
          <Clock className="h-3 w-3 stroke-zinc-400" /> Recently created
        </h2>
      </hgroup>
      <RecentList />
    </div>
  );
}
