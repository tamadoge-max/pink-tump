"use client";

import { CalendarIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import {
  DateValue,
  useButton,
  useDatePicker,
  useInteractOutside,
} from "react-aria";
import { DatePickerStateOptions, useDatePickerState } from "react-stately";
import { useForwardedRef } from "@/hooks/use-forward-ref";
import { cn } from "@/lib/cn";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Calendar } from "./calendar";
import { DateField } from "./date-field";
import { TimeField } from "./time-field";
import { parseDateTime } from "@internationalized/date";
import { useToast } from "../use-toast";

const DateTimePicker = React.forwardRef<
  HTMLDivElement,
  DatePickerStateOptions<DateValue>
>((props, forwardedRef) => {
  const ref = useForwardedRef(forwardedRef);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  const state = useDatePickerState(props);
  const {
    groupProps,
    fieldProps,
    buttonProps: _buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);
  const { buttonProps } = useButton(_buttonProps, buttonRef);
  useInteractOutside({
    ref: contentRef,
    onInteractOutside: (e) => {
      setOpen(false);
    },
  });

  return (
    <div>
      <div
        aria-label="date time picker"
        {...groupProps}
        ref={ref}
        className={cn(
          groupProps.className,
          "h-9 flex items-center rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 bg-input border border-input-border"
        )}
      >
        <DateField aria-label="date time picker" {...fieldProps} />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              {...buttonProps}
              variant="ghost"
              disabled={props.isDisabled}
              onClick={() => setOpen(true)}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent ref={contentRef} className="w-full">
            <div
              {...dialogProps}
              aria-label="date time picker"
              className="space-y-3"
            >
              <Calendar {...calendarProps} aria-label="date time picker" />
              {!!state.hasTime && (
                <TimeField
                  aria-label="date time picker"
                  value={state.timeValue}
                  onChange={state.setTimeValue}
                  setNow={() =>
                    state.setValue(
                      parseDateTime(new Date().toISOString().substring(0, 16))
                    )
                  }
                />
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {props.errorMessage && typeof props.errorMessage === "string" && (
        <span className="text-sm text-destructive">{props.errorMessage}</span>
      )}
    </div>
  );
});

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
