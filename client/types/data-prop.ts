type Options = {
  value: string;
  label: string;
};

export type DataProp = {
  formid: string;
  dataid: string; // data id
  label: string;
  key: string;
  type: string;
  options?: Options[]; // optional
  description: string;
  isPopoverOpen: boolean;
};
