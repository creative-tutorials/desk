import type { DataProp } from "@/types/data-prop";

export function FieldCodes(field: DataProp) {
  const data = {
    string: `<div id="input">
          <Label
            className="text-sm font-medium text-muted-foreground"
            htmlFor="${field.key}"
          >
            ${field.label}
          </Label>
          <Input
            id="${field.key}"
            placeholder="${field.label}"
            className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          ${field.description}
        </p>`,
    number: `<div id="number-field" className="flex flex-col gap-2">
      <div id="input">
        <Label
          className="text-sm font-medium text-muted-foreground"
          htmlFor="${field.key}"
        >
          ${field.label}
        </Label>
        <Input
          id="${field.key}"
          type="number"
          placeholder="${field.label}"
          className="border border-zinc-900 bg-zinc-950 text-white focus:ring-offset-gray-600"
        />
      </div>
      <p className="text-sm text-muted-foreground">${field.description}</p>
    </div>`,
    boolean: `<div id="boolean-field" className="flex w-full items-center justify-between rounded-md border border-zinc-900 p-4">
      <hgroup>
        <h3 className="text-lg text-white">${field.label}</h3>
        <p className="text-sm text-muted-foreground">${field.description}</p>
      </hgroup>
      <div id="switch">
        <Switch className="bg-zinc-900" id="${field.key}" />
      </div>
    </div>`,
    date: `<div id="date-field">
      <hgroup>
        <Label
          className="text-sm font-medium text-muted-foreground"
          htmlFor="${field.key}"
        >
          ${field.label}
        </Label>
      </hgroup>
      <div id="date-group" className="flex flex-col gap-2">
        <div id="date">
          <Popover>
            <PopoverTrigger
              asChild
              className="border border-zinc-800 bg-zinc-900 hover:bg-zinc-900/80 hover:text-muted-foreground focus:bg-zinc-900/80"
            >
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </p>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto border-zinc-900 bg-zinc-950 p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="text-white"
              />
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-sm text-muted-foreground">${field.description}</p>
      </div>
    </div>`,
    enum: `<div id="enum-field" className="flex flex-col">
      <Label
        className="text-sm font-medium text-muted-foreground"
        htmlFor="${field.key}"
      >
        ${field.label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          className="border border-zinc-800 bg-zinc-900 text-muted-foreground hover:bg-zinc-900/80 hover:text-muted-foreground focus:bg-zinc-900/80"
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : description}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] border-none p-0">
          <Command className="border border-zinc-900 bg-zinc-950">
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    className="text-muted-foreground"
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>`,
  };

  return data;
}
