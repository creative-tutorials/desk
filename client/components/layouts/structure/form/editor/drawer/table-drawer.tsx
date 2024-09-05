import { TableCell } from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { ProfileForm } from "./profile-form";

export function TableDrawer({ dataid }: { dataid: string }) {
  return (
    <TableCell className="text-right">
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border border-zinc-900 bg-zinc-950">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-white">Edit description</DrawerTitle>
            <DrawerDescription>
              Update the description of this field. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm dataid={dataid} />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </TableCell>
  );
}
