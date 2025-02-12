import cn from "@/utils/cn";
import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
