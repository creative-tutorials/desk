"use client";

import { useAuth, useUser, useClerk } from "@clerk/nextjs";
import { useUserInfo } from "@/utils/user-info";
import { Button } from "@/components/ui/button";
import Avvvatars from "avvvatars-react";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  ChevronDown,
  User,
  Users,
  CreditCard,
  Keyboard,
  LogOut,
  Settings,
} from "lucide-react";

export function HeaderButtons() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const userInfo = useUserInfo(isSignedIn, isLoaded, user);

  return (
    <div id="header-end" className="flex items-center gap-2">
      <Button variant={"link"} className="text-muted-foreground">
        Contact
      </Button>
      {isSignedIn && isLoaded ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="group w-full cursor-pointer select-none focus:border-none focus:outline-none"
          >
            <div id="dropdown-col-left" className="">
              <div id="dropdown-image">
                <Avvvatars value={userInfo?.email as string} size={30} />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 border-zinc-900 bg-zinc-950 shadow-xl">
            <DropdownMenuLabel className="text-white">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-900" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white focus:bg-zinc-900 focus:text-white">
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-zinc-900" />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="text-white focus:bg-zinc-900 focus:text-white"
                disabled
              >
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white focus:bg-zinc-900 focus:text-white"
                disabled
              >
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-zinc-900" />
            <DropdownMenuItem
              className="text-white focus:bg-zinc-900 focus:text-white"
              onClick={() => signOut({ redirectUrl: "/sign-in" })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button>Sign in</Button>
      )}
    </div>
  );
}
