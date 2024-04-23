import { CreateCoffeeForm } from "@/components";
import { CloseIcon } from "@/components/Icons";
import Link from "next/link";

export default async function Create() {
  return (
    <div className="flex items-center justify-center bg-gradient w-full h-screen">
      <div className="w-[375px] h-[844px] lg:w-[714px] lg:h-[750px] bg-mvst_zinc">
        <Link href="/" className="flex justify-end m-10">
          <CloseIcon width={40} height={40} />
        </Link>
        <div className="text-white font-bebas text-[50px] leading-[50px] text-center">
          Create New
        </div>
        <CreateCoffeeForm />
      </div>
    </div>
  );
}
