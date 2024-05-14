"use client";

import { DateSegment } from "./date-segment";
import { useRef } from "react";
import {
  AriaTimeFieldProps,
  TimeValue,
  useLocale,
  useTimeField,
} from "react-aria";
import { useTimeFieldState } from "react-stately";
import { cn } from "@/lib/cn";

interface TimeFieldProps extends AriaTimeFieldProps<TimeValue> {
  setNow?: () => void;
}

function TimeField(props: TimeFieldProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const {
    fieldProps: { ...fieldProps },
    labelProps,
  } = useTimeField(props, state, ref);

  return (
    <div
      {...fieldProps}
      ref={ref}
      className={cn(
        "inline-flex h-10 w-full flex-1 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.isDisabled ? "cursor-not-allowed opacity-50" : ""
      )}
    >
      <div className="flex justify-between w-full items-center">
        <div className="inline-flex w-full flex-1">
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
        </div>
        <div
          onClick={props.setNow}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-1 px-2 cursor-pointer"
        >
          <span className="text-xs text-muted-foreground transition-colors">
            NOW
          </span>
        </div>
      </div>
    </div>
  );
}

export { TimeField };
