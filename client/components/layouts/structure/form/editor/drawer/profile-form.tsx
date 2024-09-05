import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { getAPIUrl } from "@/utils/urlUtils";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

export function ProfileForm({ dataid }: { dataid: string }) {
  const queryClient = useQueryClient();
  const [fdescription, setFdescription] = useState("");
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();

  const updateField = async (description: string) => {
    if (!isSignedIn || !isLoaded) return;

    try {
      const url = getAPIUrl(`field/description/${dataid}`);
      const token = await getToken();
      const res = await axios.put(
        url,
        {
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            userid: userId,
          },
        },
      );

      if (res.status === 200) return res.data;

      // handle error
    } catch (err) {
      throw err;
    }
  };

  const mutation = useMutation({
    mutationFn: updateField,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["fields"] });
      toast.success("Field description updated successfully");
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid gap-2">
        <Label htmlFor="description" className="text-muted-foreground">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Add a description"
          className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
          value={fdescription}
          onChange={(e) => setFdescription(e.target.value)}
        />
      </div>

      <Button onClick={() => mutation.mutate(fdescription)}>
        Save changes
      </Button>
    </div>
  );
}
