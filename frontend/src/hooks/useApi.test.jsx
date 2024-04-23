import { renderHook } from "@testing-library/react-hooks";
import { ENDPOINTS } from "@/services/consts";
import { fetcher } from "@/services/fetcher";
import { CoffeType } from "@/types/coffee";
import useSWR from "swr";
import { useApi } from "./useApi";

jest.mock("swr");

describe("useApi Hook", () => {
  it("calls useSWR with the correct endpoint when refetch is true and coffeeType is provided", () => {
    const mockCoffeeType = CoffeType.Robusta;

    renderHook(() => useApi(mockCoffeeType, true));

    expect(useSWR).toHaveBeenCalledWith(
      `${ENDPOINTS.BASE_URL}${ENDPOINTS.COFFEES_LIST}?type=${mockCoffeeType}`,
      fetcher,
    );
  });

  it("calls useSWR with the correct endpoint when refetch is true and coffeeType is null", () => {
    renderHook(() => useApi(null, true));

    expect(useSWR).toHaveBeenCalledWith(
      `${ENDPOINTS.BASE_URL}${ENDPOINTS.COFFEES_LIST}`,
      fetcher,
    );
  });

  it("calls useSWR with null when refetch is false", () => {
    renderHook(() => useApi(null, false));

    expect(useSWR).toHaveBeenCalledWith(null, fetcher);
  });
});
