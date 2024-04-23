"use client";
import { useEffect, useState } from "react";
import { CoffeType, Coffee } from "@/types/coffee";
import { OptionsBar } from "../OptionsBar";
import { Button } from "../Button";
import { Gallery } from "../Gallery";
import { useApi } from "@/hooks/useApi";

type CoffeesSectionProps = {
  initialList: Coffee[];
};

const CoffeesSection: React.FC<CoffeesSectionProps> = ({
  initialList,
}: CoffeesSectionProps) => {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>(initialList);
  const [selectedType, setSelectedType] = useState<CoffeType | null>(null);

  const { data } = useApi(null, !selectedType);

  useEffect(() => {
    if (data && !selectedType) {
      setCoffeeList(data);
    }
  }, [data]);

  return (
    <>
      <OptionsBar>
        <Button
          text="All"
          className={`${selectedType == null ? "bg-white" : "bg-neutral-700"
            } w-[97px] md:w-[154px]`}
          fontStyle={`${selectedType == null ? "text-black" : "text-white"}`}
          onClick={() => setSelectedType(null)}
        />
        <Button
          text="Robusta"
          className={`${selectedType == CoffeType.Robusta ? "bg-white" : "bg-neutral-700"
            }`}
          fontStyle={`${selectedType == CoffeType.Robusta ? "text-black" : "text-white"
            }`}
          onClick={() => setSelectedType(CoffeType.Robusta)}
        />
        <Button
          text="Arabic"
          className={`${selectedType == CoffeType.Arabic ? "bg-white" : "bg-neutral-700"
            }`}
          fontStyle={`${selectedType == CoffeType.Arabic ? "text-black" : "text-white"
            }`}
          onClick={() => setSelectedType(CoffeType.Arabic)}
        />
      </OptionsBar>
      <Gallery
        coffees={
          !selectedType
            ? coffeeList
            : coffeeList.filter((coffee: Coffee) => coffee.type == selectedType)
        }
      />
    </>
  );
};

export default CoffeesSection;
