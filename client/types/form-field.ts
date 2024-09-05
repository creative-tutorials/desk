type Options = {
  value: string;
  label: string;
};

export type FormField = {
  id: string;
  label: string;
  key: string;
  description?: string; // optional
  options?: Options[]; // optional
  dataType: "string" | "number" | "boolean" | "enum" | "date";
  isPopoverOpen: boolean;
};
