"use client";

import { getAPIUrl } from "@/utils/urlUtils";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import type { GetToken } from "@clerk/types";
import { useQuery } from "@tanstack/react-query";
import { FormField } from "@/types/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DatePreview } from "./preview/date-preview";
import { EnumPreview } from "./preview/enum-preview";
import { SwitchPreview } from "./preview/switch-preview";
import { NumberPreview } from "./preview/number-preview";
import type { DataProp } from "@/types/data-prop";
import { fetchFields } from "@/function/fetch-fields";

export function PreviewTab() {
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();

  const { isPending, isError, data, error } = useQuery<DataProp[]>({
    queryKey: ["fields"],
    queryFn: () => fetchFields(isSignedIn, isLoaded, userId, getToken),
    retry: 2,
  });

  if (isPending)
    return (
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    );
  if (isError)
    return <div className="text-red-500">Error: {error?.message}</div>;

  return (
    <div className="flex w-full max-w-xl flex-col space-y-4">
      {data.map((field, index) => (
        <div key={index}>
          {field.type === "String" && (
            <div id="preview-container" className="flex flex-col gap-2">
              <div id="input">
                <Label
                  className="text-sm font-medium text-muted-foreground"
                  htmlFor={field.key}
                >
                  {field.label}
                </Label>
                <Input
                  id={field.key}
                  placeholder={field.label}
                  className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            </div>
          )}
          {field.type === "Number" && <NumberPreview field={field} />}
          {field.type === "Boolean" && <SwitchPreview field={field} />}
          {field.type === "Date" && <DatePreview field={field} />}
          {field.type === "Enum" && <EnumPreview field={field} />}
        </div>
      ))}
    </div>
  );
}
