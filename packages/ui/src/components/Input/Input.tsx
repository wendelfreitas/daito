import React from 'react';
import { tv } from 'tailwind-variants';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  format?: string;
}

export const inputVariants = tv({
  base: 'text-black dark:text-white flex h-10 w-full rounded-md border border-gray-400/50 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:dark:ring-white disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-black/10',
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputVariants({ className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const InputMask = React.forwardRef<HTMLInputElement, PatternFormatProps>(
  ({ className, ...props }, ref) => {
    return (
      <PatternFormat
        className={inputVariants({ className })}
        getInputRef={ref}
        {...props}
      />
    );
  }
);

InputMask.displayName = 'InputMask';
