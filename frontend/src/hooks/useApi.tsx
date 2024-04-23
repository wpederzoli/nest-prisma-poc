import { ENDPOINTS } from "@/services/consts";
import { fetcher } from "@/services/fetcher";
import { CoffeType } from "@/types/coffee";
import useSWR from "swr";

export const useApi = (coffeeType: CoffeType | null, refetch: boolean) => {
  const { data } = useSWR(
    refetch
      ? `${ENDPOINTS.BASE_URL}${ENDPOINTS.COFFEES_LIST}${coffeeType ? `?type=${coffeeType}` : ""
      }`
      : null,
    fetcher,
  );

  return {
    data,
  };
};
