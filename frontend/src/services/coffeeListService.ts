import { CoffeType, Coffee, WithoutId } from "@/types/coffee";
import { ENDPOINTS } from "./consts";

export const createCoffee = async (newCoffee: WithoutId<Coffee>) => {
  const res = await fetch(`http://localhost:5000/${ENDPOINTS.CREATE_COFFEE}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newCoffee),
  });

  return res;
};

export const getCoffees = async (type?: CoffeType): Promise<Coffee[]> => {
  let url = `http://localhost:5000/${ENDPOINTS.COFFEES_LIST}`;
  if (type) {
    url = `${url}?type=${type}`;
  }

  const res = await fetch(url, {
    next: { revalidate: 300 },
  });

  return await res.json();
};
