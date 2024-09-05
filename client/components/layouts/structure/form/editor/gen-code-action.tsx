import { useState } from "react";
import Link from "next/link";
import type { DataProp } from "@/types/data-prop";
import { FieldCodes } from "@/utils/field-codes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, CopyCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export function GenerateCodeAction({ data }: { data: DataProp[] }) {
  const [isCopied, setIsCopied] = useState(false);

  const code = data
    .map((field) => {
      const dcode = FieldCodes(field); // dcode = data code
      switch (field.type) {
        case "String":
          return dcode.string;
        case "Number":
          return dcode.number;
        case "Boolean":
          return dcode.boolean;
        case "Date":
          return dcode.date;
        case "Enum":
          return dcode.enum;
        default:
          return "";
      }
    })
    .join("\n");

  const copyCode = () => {
    const clipboard = navigator.clipboard;

    if (!clipboard) return;

    clipboard.writeText(code);
    toast.success("Code copied to clipboard");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Generate Code</Button>
        </DialogTrigger>
        <DialogContent className="border border-zinc-900 bg-zinc-950">
          <DialogHeader>
            <DialogTitle className="text-white">Code</DialogTitle>
            <DialogDescription className="flex items-center gap-1">
              Remember to install the missing{" "}
              <Link
                href="https://ui.shadcn.com/docs/installation"
                target="_blank"
              >
                <pre>shadcn</pre>
              </Link>{" "}
              components.
            </DialogDescription>
          </DialogHeader>
          <div className="h-44 max-h-[42rem] min-h-44 resize-y overflow-auto">
            <SyntaxHighlighter language={"typescript"} style={nightOwl}>
              {code}
            </SyntaxHighlighter>
          </div>
          <DialogFooter>
            <Button className="flex items-center gap-1" onClick={copyCode}>
              Copy Code{" "}
              {isCopied ? (
                <CopyCheck className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
