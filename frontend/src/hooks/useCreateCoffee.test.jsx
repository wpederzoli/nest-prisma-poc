import { renderHook, act } from "@testing-library/react-hooks";
import { useCreateCoffee } from "./useCreateCoffee";
import { createCoffee } from "../services/coffeeListService";
import { CoffeType } from "@/types/coffee";

jest.mock("../services/coffeeListService", () => ({
  createCoffee: jest.fn(),
}));

describe("useCreateCoffee Hook", () => {
  it("updates state variables correctly", () => {
    const { result } = renderHook(() => useCreateCoffee());

    act(() => {
      result.current.setCoffeeName("Sample Coffee");
      result.current.setCoffeePrice(5.99);
      result.current.setCoffeeDescription("Sample Description");
      result.current.setCoffeeImageUrl("sample-image-url");
      result.current.setCoffeeType(CoffeType.Robusta);
    });

    expect(result.current.coffeeName).toBe("Sample Coffee");
    expect(result.current.coffeePrice).toBe(5.99);
    expect(result.current.coffeeDescription).toBe("Sample Description");
    expect(result.current.coffeeImageUrl).toBe("sample-image-url");
    expect(result.current.coffeeType).toBe(CoffeType.Robusta);
  });

  it("validates coffee correctly", () => {
    const { result } = renderHook(() => useCreateCoffee());

    expect(result.current.isValidCoffee).toBe(false);

    act(() => {
      result.current.setCoffeeName("Sample Coffee");
      result.current.setCoffeePrice(5.99);
      result.current.setCoffeeDescription("Sample Description");
      result.current.setCoffeeImageUrl("sample-image-url");
      result.current.setCoffeeType(CoffeType.Robusta);
    });

    expect(result.current.isValidCoffee).toBe(true);
  });

  it("creates new coffee correctly", async () => {
    const { result } = renderHook(() => useCreateCoffee());

    act(() => {
      result.current.setCoffeeName("Sample Coffee");
      result.current.setCoffeePrice(5.99);
      result.current.setCoffeeDescription("Sample Description");
      result.current.setCoffeeImageUrl("sample-image-url");
      result.current.setCoffeeType(CoffeType.Robusta);
    });

    await act(async () => {
      await result.current.createNewCoffee();
    });

    expect(createCoffee).toHaveBeenCalledWith({
      name: "Sample Coffee",
      description: "Sample Description",
      type: CoffeType.Robusta,
      imageUrl: "sample-image-url",
      price: 5.99,
    });
  });
});
