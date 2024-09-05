import { Sidebar } from "@/components/sidebar/sidebar";
import { WelcomeText } from "@/components/layouts/structure/welcome-text";
import { RecentlyCanvas } from "@/components/layouts/structure/recently-canvas";
import { SubmissionSection } from "@/components/layouts/structure/submission";

export default function Home() {
  return (
    <main>
      {/* =========== Sidebar =========== */}
      <Sidebar />
      <div id="sections" className="flex w-full flex-col gap-5 p-5">
        <section id="recently" className="w-full">
          <div
            id="content-canvas"
            className="flex flex-col gap-4 md:ml-64 lg:ml-64"
          >
            {/* =========== Welcome Text =========== */}
            <WelcomeText />
            {/* =========== Recently Canvas =========== */}
            <RecentlyCanvas />
          </div>
        </section>
        {/* =========== Submission =========== */}
        <SubmissionSection />
      </div>
    </main>
  );
}
