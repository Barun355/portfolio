import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import React from "react";

interface BtnPropType {
  children: string | React.ReactNode;
  className?: string
  variants?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactElement
  onClick?: () => {};
}

const buttonVariants = cva(
  "btn rounded-full w-fit transition-all duration-[150ms] font-[inter] tracking-wide",
  {
    variants: {
      variants: {
        primary: "bg-indigo-600 hover:bg-indigo-500 text-white/80 hover:bg-indigo-500",
        secondary: "bg-green-400 hover:bg-green-500 hover:text-black",
        "outline-primary":
          "border border-indigo-400 hover:bg-indigo-500 hover:text-black",
        "outline-secondary":
          "border border-indigo-400 hover:bg-green-400 hover:text-black",
      },
      size: {
        sm: "text-[0.75rem] h-[2.5rem] px-3",
        md: "text-[0.875rem] h-[3rem] px-5",
        lg: "text-[1rem] h-[4rem] px-7",
      },
    },
    defaultVariants: {
      variants: "primary",
      size: "md",
    },
  }
);

function Button({ children, className, variants, size, icon, onClick }: BtnPropType) {
  return (
    <button onClick={onClick} className={cn(buttonVariants({ variants, size }), className)}>
      <label>{children}</label>
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default Button;
