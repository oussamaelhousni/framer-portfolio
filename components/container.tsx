import cn from "@/utils/cn";
import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("max-w-[1000px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
