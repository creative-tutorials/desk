import { FormField } from "@/types/form-field";

export const data: FormField[] = [
  {
    id: "1",
    label: "Name",
    key: "name",
    dataType: "string",
    isPopoverOpen: false,
  },
  {
    id: "2",
    label: "Email",
    key: "email",
    dataType: "string",
    isPopoverOpen: false,
  },
  {
    id: "3",
    label: "Phone",
    key: "phone",
    dataType: "number",
    isPopoverOpen: false,
  },
  {
    id: "4",
    label: "Terms and Conditions",
    key: "boolean",
    description: "I consent to the terms and conditions",
    dataType: "boolean",
    isPopoverOpen: false,
  },
  {
    id: "5",
    label: "Date",
    key: "date",
    dataType: "date",
    isPopoverOpen: false,
  },
  {
    id: "6",
    label: "Game",
    description: "Select a game",
    key: "enum",
    options: [
      {
        value: "nfs",
        label: "Need for Speed",
      },
      {
        value: "asphalt",
        label: "Asphalt 8",
      },
      {
        value: "gta",
        label: "Grand Theft Auto",
      },
      {
        value: "pes",
        label: "Pes",
      },
      {
        value: "fifa",
        label: "FIFA",
      },
    ],
    dataType: "enum",
    isPopoverOpen: false,
  },
];
