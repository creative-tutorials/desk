"use client";

import { FileText } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { getForm } from "@/function/get-form";
import { useRouter } from "next/navigation";

type Form = {
  id: string;
  formid: string;
  name: string;
  createdAt: string;
};

export function RecentList() {
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();
  const router = useRouter();

  const { isPending, isError, data, error } = useQuery<Form[]>({
    queryKey: ["forms"],
    queryFn: () => getForm(isSignedIn, isLoaded, userId, getToken),
    retry: 2,
  });

  if (isPending)
    return (
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    );
  if (isError)
    return <div className="text-red-500">Error: {error?.message}</div>;

  return (
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
          {/* {Array.from({ length: 20 }).map((_, index) => (
           
          ))} */}
          {data.map((form, index) => (
            <CarouselItem
              key={index}
              className="cursor-pointer pl-1 md:basis-1/2 lg:basis-1/3"
              onClick={() => router.push(`/editor/${form.formid}`)}
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
                      {form.name}
                    </h3>
                  </hgroup>
                  <div id="bottom-list-content">
                    <div id="profile"></div>
                    <div id="bottom-list-content-text">
                      <p className="text-xs text-zinc-400">{form.createdAt}</p>
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
  );
}
