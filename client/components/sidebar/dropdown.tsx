"use client";

import { useState } from "react";
import { getAPIUrl } from "@/utils/urlUtils";
import axios from "axios";
import { useAuth, useUser, useClerk } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Avvvatars from "avvvatars-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { useUserInfo } from "@/utils/user-info";

export function SidebarDropdown() {
  const queryClient = useQueryClient();
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [name, setName] = useState("");
  const userInfo = useUserInfo(isSignedIn, isLoaded, user);

  const createForm = async (name: string) => {
    try {
      const token = await getToken();
      const url = getAPIUrl("form");
      const res = await axios.post(
        url,
        {
          fname: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            userid: userId,
          },
        },
      );

      if (res.status === 201) return res.data;

      // handle error
    } catch (err) {
      throw err;
    }
  };

  const mutation = useMutation({
    mutationFn: createForm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
      toast.success("Form created successfully"); // display a success message
      setName(""); // reset the field after successful submission
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return (
    <div
      id="sidebar-dropdown"
      className="flex items-center justify-between gap-2"
    >
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="group w-full cursor-pointer select-none focus:border-none focus:outline-none"
        >
          <div id="dropdown-col-left" className="flex items-center gap-2">
            <div id="dropdown-image">
              <Avvvatars value={userInfo?.email as string} size={24} />
            </div>
            <div id="dropdown-text" className="flex items-center gap-1">
              <span className="text-xs text-zinc-400">
                {userInfo?.email.split("@")[0]}
              </span>
              <span>
                <ChevronDown className="h-4 w-4 stroke-zinc-400 transition-all group-data-[state=open]:rotate-180" />
              </span>
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

      <Dialog>
        <DialogTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  id="dropdown-col-right"
                  className="group cursor-pointer select-none rounded-full bg-zinc-900 p-1 transition-all hover:bg-zinc-800/30"
                >
                  <Plus className="h-4 w-4 stroke-zinc-400 transition-all group-hover:stroke-zinc-300" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>New form</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="border border-zinc-900 bg-zinc-950 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Create new form</DialogTitle>
            <DialogDescription>
              Create a new form to start collecting data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="">
              <Label
                htmlFor="name"
                className="text-right text-muted-foreground"
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                className="col-span-3 border-zinc-800 bg-zinc-950 text-white focus:ring-offset-slate-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="text-xs text-muted-foreground">
                Give your form a name.
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => mutation.mutate(name)}>
              Create form
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
