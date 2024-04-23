"use client";
import Link from "next/link";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { CoffeType } from "@/types/coffee";
import { useRouter } from "next/navigation";
import { useCreateCoffee } from "@/hooks/useCreateCoffee";

const CreateCoffeeForm: React.FC = () => {
  const {
    isValidCoffee,
    coffeeName,
    setCoffeeName,
    coffeePrice,
    setCoffeePrice,
    coffeeType,
    setCoffeeType,
    coffeeImageUrl,
    setCoffeeImageUrl,
    coffeeDescription,
    setCoffeeDescription,
    createNewCoffee,
  } = useCreateCoffee();

  const { push } = useRouter();

  const createCoffeeWrapper = async () => {
    const res = await createNewCoffee();
    const query = res.status == 200 ? "/" : "/?success=false";
    push(query);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-5 pr-5 lg:pl-32 lg:pr-32">
        <TextInput
          label="Name"
          placeholder="Name your coffee here"
          className="lg:col-span-2"
          type="text"
          value={coffeeName || ""}
          onChange={(val) => setCoffeeName(val as string)}
        />
        <TextInput
          label="Price"
          placeholder="0.00"
          type="number"
          value={coffeePrice || 0.0}
          onChange={(val) => setCoffeePrice(val as number)}
        />
      </div>
      <div className="lg:pl-32 lg:pr-32 pr-5 pl-5 pt-5">
        <label className="text-neutral-400 text-sm font-medium font-['DM Sans'] leading-[21px]">
          Type
        </label>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:pl-32 lg:pr-32 pt-2 pr-5 pl-5">
        <button
          className={`${coffeeType == (CoffeType.Arabic as string)
              ? "opacity-100"
              : "opacity-50"
            } text-white text-sm font-normal font-['DM Sans'] leading-tight border h-10 rounded-lg`}
          onClick={() => setCoffeeType(CoffeType.Arabic)}
        >
          Arabic
        </button>
        <button
          className={`${coffeeType == (CoffeType.Robusta as string)
              ? "opacity-100"
              : "opacity-50"
            } text-white text-sm font-normal font-['DM Sans'] leading-tight border h-10 rounded-lg`}
          onClick={() => setCoffeeType(CoffeType.Robusta)}
        >
          Robusta
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:pl-32 lg:pr-32 pl-5 pr-5 pt-5">
        <TextInput
          label="Upload image"
          placeholder="Paste image URL here"
          className="col-span-3"
          type="url"
          value={coffeeImageUrl || ""}
          onChange={(val) => setCoffeeImageUrl(val as string)}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:pl-32 lg:pr-32 pr-5 pl-5 pt-5">
        <TextInput
          label="Description"
          placeholder="Add a description"
          className="col-span-3"
          value={coffeeDescription || ""}
          onChange={(val) => setCoffeeDescription(val as string)}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:pl-32 lg:pr-32 pt-10 pb-32">
        <Link href="/" className="w-full flex lg:justify-end justify-center">
          <Button
            text="Discard"
            className="bg-zinc-900 border border-yellow-600 w-[326px] lg:w-[115px] lg:h-[45px]"
            fontStyle="text-white"
          />
        </Link>
        <Button
          text="Create"
          className={`${!isValidCoffee && "opacity-50"
            } w-[326px] lg:w-[115px] lg:h-[45px] lg:ml-0 m-auto`}
          fontStyle="text-white"
          disable={!isValidCoffee}
          onClick={createCoffeeWrapper}
        />
      </div>
    </>
  );
};

export default CreateCoffeeForm;
