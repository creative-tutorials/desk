import type { DataProp } from "@/types/data-prop";
import { Switch } from "@/components/ui/switch";

type SwitchProps = {
  field: DataProp;
};

export function SwitchPreview(props: SwitchProps) {
  const { field } = props;
  const { key, label, description } = field;
  return (
    <div className="flex w-full items-center justify-between rounded-md border border-zinc-900 p-4">
      <hgroup>
        <h3 className="text-lg text-white">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </hgroup>
      <div id="switch">
        <Switch className="bg-zinc-900" id={key} />
      </div>
    </div>
  );
}
