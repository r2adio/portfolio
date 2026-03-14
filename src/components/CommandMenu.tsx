"use client";

import * as React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import { CommandIcon, SearchIcon } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative border rounded-2xl p-px"
      >
        <span className="flex items-center gap-1.5 rounded-2xl bg-background px-2 py-1 text-sm">
          <SearchIcon className="h-4 w-4 text-muted-foreground stroke-3" />
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            {/* <span className="text-xs">⌘</span>K */}
            <CommandIcon className="h-4 w-4" />K
          </kbd>
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem
                onSelect={() => {
                  window.location.href = "/";
                  setOpen(false);
                }}
              >
                Home
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  window.location.href = "/blog";
                  setOpen(false);
                }}
              >
                Blog
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
