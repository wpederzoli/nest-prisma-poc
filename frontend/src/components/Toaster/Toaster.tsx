"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { WarningIcon } from "../Icons/Warning";
import { CloseIcon } from "../Icons";

type ToasterProps = {
  text: string;
};

const Toaster: React.FC<ToasterProps> = ({ text }: ToasterProps) => {
  const [showToaster, setShowToaster] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");
    if (success == "false") {
      setShowToaster(true);
    }
  }, [searchParams]);

  const closeToast = () => {
    setShowToaster(false);
  };

  return (
    <>
      {showToaster ? (
        <div className="absolute w-[327px] top-5 right-5 bg-red-400 grid grid-cols-6 justify-between items-center pt-5 pb-5 pr-4 pl-4 rounded-[8px]">
          <div className="col-span-1 ">
            <WarningIcon width={24} height={24} />
          </div>
          <div className="text-white font-poppins col-span-4 text-[14px] leading-4">
            {text}
          </div>
          <div className="col-span-1 hover:cursor-pointer" onClick={closeToast}>
            <CloseIcon width={24} height={24} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Toaster;
