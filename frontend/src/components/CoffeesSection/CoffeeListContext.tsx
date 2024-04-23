import { CoffeType, Coffee } from "@/types/coffee";
import { Dispatch, SetStateAction, createContext } from "react";

type CoffeeListContextType = {
  coffeesList: Coffee[];
  selectedType: CoffeType | null;
  setSelectedType: Dispatch<SetStateAction<CoffeType | null>> | null;
};

export const CoffeeListContext = createContext<CoffeeListContextType>({
  coffeesList: [],
  selectedType: null,
  setSelectedType: null,
});
