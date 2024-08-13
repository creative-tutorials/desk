import { Clock, FileText, Database } from "lucide-react";
import { Sidebar } from "@/components/sidebar/sidebar";
import { WelcomeText } from "@/components/layouts/welcome-text";
import { Submissions } from "@/components/layouts/data/submission-table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main>
      {/* ====== Sidebar ====== */}
      <Sidebar />
      <div id="sections" className="flex w-full flex-col gap-5 p-5">
        <section id="recently" className="w-full">
          <div
            id="content-canvas"
            className="flex flex-col gap-4 md:ml-64 lg:ml-64"
          >
            <WelcomeText />
            <div id="recently-canvas">
              <hgroup>
                <h2 className="flex items-center gap-2 text-sm text-zinc-400">
                  <Clock className="h-3 w-3 stroke-zinc-400" /> Recently created
                </h2>
              </hgroup>
              <div
                id="recently-list"
                className="my-2 flex w-full items-center justify-center bg-transparent"
              >
                <Carousel
                  className="w-full max-w-4xl"
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                >
                  <CarouselContent className="-ml-1">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                      >
                        <div
                          id="list"
                          className="relative rounded-lg bg-zinc-900 p-4 pt-10"
                        >
                          <div
                            id="list-cover"
                            className="absolute left-0 top-0 w-full rounded-t-lg bg-[url('/desk.avif')] bg-cover bg-center p-8"
                          >
                            <FileText className="absolute -bottom-4 left-3 h-8 w-8 stroke-zinc-600" />
                          </div>
                          <div id="list-content" className="mt-14">
                            <hgroup>
                              <h3 className="text-base font-medium text-zinc-400">
                                {index + 1}
                              </h3>
                            </hgroup>
                            <div id="bottom-list-content">
                              <div id="profile"></div>
                              <div id="bottom-list-content-text">
                                <p className="text-xs text-zinc-400">
                                  Aug, 24, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100" />
                  <CarouselNext className="border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
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
              <Submissions />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
