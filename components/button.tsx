import cn from "@/utils/cn";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconAfter?: React.ReactNode;
  variant?: "primary" | "secondary" | "none";
};

const Button: React.FC<ButtonProps> = ({
  children,
  iconAfter,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-center uppercase",
        variant === "primary" && "border border-orange-500",
        variant === "secondary" && "border border-neutral-500",
        variant === "none" && "",
        className,
      )}
      {...rest}
    >
      <span>{children}</span> {iconAfter}
    </button>
  );
};

export default Button;
