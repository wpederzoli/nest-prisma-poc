import { ReactNode, useState } from "react";

type OptionsBarProps = {
  children: ReactNode;
};

const OptionsBar: React.FC<OptionsBarProps> = ({
  children,
}: OptionsBarProps) => {
  return (
    <div className="md:w-[548px] w-[327px] h-[50px] relative m-auto mt-[50px] bg-neutral-700 rounded-[33px] grid grid-cols-3">
      {children}
    </div>
  );
};

export default OptionsBar;
