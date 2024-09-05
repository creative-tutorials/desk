"use client";

import { useState } from "react";
import { getAPIUrl } from "@/utils/urlUtils";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { datatypes } from "@/utils/datatypes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FormData = {
  label: string;
  key: string;
  dataType: string;
};

export function FloatMenu({ id }: { id: string }) {
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<FormData>({
    label: "",
    key: "",
    dataType: "",
  });
  const data = datatypes;

  const toggleContainer = () => {
    const container: HTMLElement | null = document.getElementById("container");
    const floatMenu: HTMLElement | null = document.getElementById("float-menu");
    if (!container || !floatMenu) return;

    const state = container.getAttribute("data-state");
    const floatMenuState = floatMenu.getAttribute("data-state");
    if (state === "open" && floatMenuState === "closed") {
      container.setAttribute("data-state", "closed");
      floatMenu.setAttribute("data-state", "open");
    } else {
      container.setAttribute("data-state", "open");
      floatMenu.setAttribute("data-state", "closed");
    }
  };

  const createField = async (data: FormData) => {
    if (!isSignedIn || !isLoaded) return;

    try {
      const url = getAPIUrl(`field/${id}`);
      const token = await getToken();
      const res = await axios.post(
        url,
        {
          label: data.label,
          key: data.key,
          type: data.dataType,
          description: "",
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
    mutationFn: createField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fields"] });
      toast.success("Field created successfully");
      setFormData({ label: "", key: "", dataType: "" });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return (
    <>
      <div
        id="container"
        data-state="closed"
        className="pointer-events-none fixed bottom-0 right-2 z-50 w-full max-w-xs rounded-xl border border-zinc-900 bg-zinc-950 p-4 opacity-0 transition-all duration-500 data-[state=open]:pointer-events-auto data-[state=open]:bottom-20 data-[state=open]:opacity-100"
      >
        <div id="cont-wrapp" className="flex flex-col gap-3">
          <hgroup>
            <h2 className="text-lg font-medium text-white">Add Field</h2>
          </hgroup>
          <div id="button-group" className="flex flex-col gap-2">
            {data.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    key={index}
                    onClick={() =>
                      setFormData({ ...formData, dataType: item.label })
                    }
                  >
                    {item.label}
                  </Button>
                </DialogTrigger>
                <DialogContent className="border border-zinc-900 bg-zinc-950 sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-white">Add Field</DialogTitle>
                    <DialogDescription>
                      Let's add a new field to your form. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="">
                      <Label
                        htmlFor="label"
                        className="text-right text-muted-foreground"
                      >
                        Label
                      </Label>
                      <Input
                        id="label"
                        className="col-span-3 border-zinc-800 bg-zinc-950 text-white focus:ring-offset-slate-600"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            label: e.target.value,
                          })
                        }
                        value={formData.label}
                      />
                      <span className="text-xs text-muted-foreground">
                        Give your field a label.
                      </span>
                    </div>
                    <div className="">
                      <Label
                        htmlFor="key"
                        className="text-right text-muted-foreground"
                      >
                        Key
                      </Label>
                      <Input
                        id="key"
                        className="col-span-3 border-zinc-800 bg-zinc-950 text-white focus:ring-offset-slate-600"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            key: e.target.value.toLowerCase(),
                          })
                        }
                        value={formData.key}
                      />
                      <span className="text-xs text-muted-foreground">
                        Unique key for the field.
                      </span>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      type="submit"
                      onClick={() => mutation.mutate(formData)}
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-2 z-50">
        <div
          id="float-menu"
          data-state="open"
          className="cursor-pointer rounded-full bg-neutral-100/10 p-2 backdrop-blur-md transition-all hover:bg-neutral-100 data-[state=closed]:rotate-45"
          onClick={toggleContainer}
        >
          <Plus className="h-6 w-6" />
        </div>
      </div>
    </>
  );
}
