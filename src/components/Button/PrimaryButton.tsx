import React from "react";

type buttonProps = {
  text: string;
  className?: string;
};

export const PrimaryButton = ({ text, className }: buttonProps) => {
  return (
    <div className={"rounded-full p-3 cursor-pointer text-xl " + className}>
      {text}
    </div>
  );
};
