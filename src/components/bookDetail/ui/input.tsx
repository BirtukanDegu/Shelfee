import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => (
    <div
      className={`flex items-center relative ${
        label ? "h-[52px]" : "h-[42px]"
      } ${className || ""}`}
    >
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-brand-cream whitespace-nowrap"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        {...props}
        name={label}
        id={label}
        className={`peer block w-full border-0 py-1.5 text-gray-900 dark:text-brand-cream focus:ring-0 sm:text-sm sm:leading-6 outline-none ${
          label ? "text-right" : "p-0"
        }  placeholder:text-neutral-700/40 dark:placeholder:text-brand-cream/20 placeholder:font-medium caret-brand-orange`}
      />
      <div
        className="absolute inset-x-0 bottom-0 border-t border-gray-300 dark:border-brand-cream/20 peer-hover:border-neutral-400 dark:peer-hover:border-brand-cream/50 peer-focus:border-t peer-focus:border-brand-orange border-dashed"
        aria-hidden="true"
      />
    </div>
  )
);

Input.displayName = "Input";

export { Input };
