import { useEffect, useState } from "react";
import { createCoffee } from "@/services/coffeeListService";
import { CoffeType } from "@/types/coffee";

export const useCreateCoffee = () => {
  const [coffeeName, setCoffeeName] = useState<string | undefined>();
  const [coffeePrice, setCoffeePrice] = useState<number | undefined>();
  const [coffeeDescription, setCoffeeDescription] = useState<
    string | undefined
  >();
  const [coffeeImageUrl, setCoffeeImageUrl] = useState<string | undefined>();
  const [coffeeType, setCoffeeType] = useState<CoffeType | undefined>();
  const [isValidCoffee, setIsValidCoffee] = useState(false);

  useEffect(() => {
    setIsValidCoffee(validateCoffee());
  }, [coffeeName, coffeePrice, coffeeType, coffeeImageUrl, coffeeDescription]);

  const validateCoffee = () => {
    return !!(
      coffeeName &&
      coffeeName.length > 0 &&
      coffeePrice &&
      coffeePrice > 0 &&
      coffeeType &&
      coffeeImageUrl &&
      coffeeImageUrl.length > 0 &&
      coffeeDescription &&
      coffeeDescription.length > 0
    );
  };

  const createNewCoffee = async () => {
    return await createCoffee({
      name: coffeeName as string,
      description: coffeeDescription as string,
      type: coffeeType as CoffeType,
      imageUrl: coffeeImageUrl as string,
      price: coffeePrice as number,
    });
  };

  return {
    coffeeName,
    setCoffeeName,
    coffeePrice,
    setCoffeePrice,
    coffeeDescription,
    setCoffeeDescription,
    coffeeImageUrl,
    setCoffeeImageUrl,
    isValidCoffee,
    coffeeType,
    setCoffeeType,
    createNewCoffee,
  };
};
