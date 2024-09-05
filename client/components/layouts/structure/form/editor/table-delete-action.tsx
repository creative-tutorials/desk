import { TableCell } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { getAPIUrl } from "@/utils/urlUtils";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

export function TableDeleteAction({ dataid }: { dataid: string }) {
  const queryClient = useQueryClient();
  const { isSignedIn, isLoaded, userId, getToken } = useAuth();

  const deleteField = async (dataid: string) => {
    if (!isSignedIn || !isLoaded) return;

    try {
      const url = getAPIUrl(`field/${dataid}`);
      const token = await getToken();
      const res = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          userid: userId,
        },
      });

      if (res.status === 200) return res.data;

      // handle error
    } catch (err) {
      throw err;
    }
  };

  const mutation = useMutation({
    mutationFn: deleteField,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["fields"] });
      toast.success("Field deleted successfully");
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return (
    <TableCell className="text-right">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="border border-zinc-900 bg-zinc-950">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              field from your form.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-800 hover:bg-red-900"
              onClick={() => mutation.mutate(dataid)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TableCell>
  );
}
