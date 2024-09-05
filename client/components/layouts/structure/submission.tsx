import { Database } from "lucide-react";
import { SubmissionsTable } from "../data/submission-table";

export function SubmissionSection() {
  return (
    <section id="submission" className="w-full">
      <div
        id="submission-canvas"
        className="flex flex-col gap-4 md:ml-64 lg:ml-64"
      >
        <div id="submission-content">
          <hgroup>
            <h2 className="flex items-center gap-2 text-sm text-zinc-400">
              <Database className="h-3 w-3 stroke-zinc-400" /> Submission
            </h2>
          </hgroup>
          {/* =========== Submission Table =========== */}
          <SubmissionsTable />
        </div>
      </div>
    </section>
  );
}
