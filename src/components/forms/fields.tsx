import { forwardRef, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import clsx from "clsx";

const fieldBase =
  "focus-ring w-full rounded-sm border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition-colors duration-150";

function fieldBorder(hasError?: boolean) {
  return hasError ? "border-maroon" : "border-line focus:border-plum";
}

export function FormRow({
  label,
  htmlFor,
  required,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink/85">
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-maroon" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }>(
  ({ hasError, className, ...rest }, ref) => (
    <input ref={ref} className={clsx(fieldBase, fieldBorder(hasError), className)} {...rest} />
  )
);
TextInput.displayName = "TextInput";

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }>(
  ({ hasError, className, rows = 5, ...rest }, ref) => (
    <textarea ref={ref} rows={rows} className={clsx(fieldBase, "resize-y", fieldBorder(hasError), className)} {...rest} />
  )
);
TextArea.displayName = "TextArea";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }>(
  ({ hasError, className, children, ...rest }, ref) => (
    <select ref={ref} className={clsx(fieldBase, fieldBorder(hasError), "appearance-none bg-no-repeat", className)} {...rest}>
      {children}
    </select>
  )
);
Select.displayName = "Select";

/** Honeypot input — visually and semantically hidden from real users, catches simple bots. */
export function Honeypot({ inputProps }: { inputProps: InputHTMLAttributes<HTMLInputElement> }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
      <label htmlFor={inputProps.name}>Leave this field blank</label>
      <input id={inputProps.name} type="text" tabIndex={-1} autoComplete="off" {...inputProps} />
    </div>
  );
}

export function SuccessBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border border-plum/25 bg-plum-tint px-4 py-3 text-sm font-medium text-plum-dark" role="status">
      {children}
    </div>
  );
}

export function ErrorBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border border-maroon/30 bg-maroon/5 px-4 py-3 text-sm font-medium text-maroon" role="alert">
      {children}
    </div>
  );
}
