import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { env } from "@/env";
import { TanStackClient } from "./tanstack-client";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desk || Form builder for your next application",
  description: "Open source alternative to Google Forms",
  applicationName: "Desk",
  keywords: [
    "Next.js",
    "Tailwind",
    "Shadcn",
    "Form Builder",
    "Desk",
    "Build forms",
  ],
  openGraph: {
    title: "Desk || Form builder for your next application",
    description: "Open source alternative to Google Forms",
    url: "https://desk.vercel.app",
    siteName: "Desk",
    images: [
      {
        url: "https://desk.vercel.app/desk.avif",
      },
    ],
  },
};

const clerkPubKey = env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#426AC6",
        },
      }}
    >
      <TanStackClient>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Toaster richColors />
          </body>
        </html>
      </TanStackClient>
    </ClerkProvider>
  );
}
