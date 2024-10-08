"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function TanStackClient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // disable refetching on window focus
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
