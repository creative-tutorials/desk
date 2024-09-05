import type { DataProp } from "@/types/data-prop";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type NumberProps = {
  field: DataProp;
  value?: string;
};

export function NumberPreview(props: NumberProps) {
  const { field } = props;
  const { key, label, description } = field;

  return (
    <div id="preview-container" className="flex flex-col gap-2">
      <div id="input">
        <Label
          className="text-sm font-medium text-muted-foreground"
          htmlFor={key}
        >
          {label}
        </Label>
        <Input
          id={key}
          type="number"
          placeholder={label}
          className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
