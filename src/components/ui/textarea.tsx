import * as React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const autoResize = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + 24 + "px";
      }
    };

    React.useEffect(() => {
      autoResize();
    }, []);

    React.useEffect(() => {
      autoResize();
    }, [props.value]);

    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input-border bg-input px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={(el) => {
          (textareaRef as any).current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        {...props}
        style={{ overflow: "hidden" }}
        onInput={autoResize}
      />
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
