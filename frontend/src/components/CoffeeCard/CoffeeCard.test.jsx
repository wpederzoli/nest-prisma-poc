import React from "react";
import { render } from "@testing-library/react";
import CoffeeCard from "./CoffeeCard";
import { CoffeType } from "@/types/coffee";

describe("CoffeeCard Component", () => {
  const mockCoffee = {
    name: "Sample Coffee",
    description: "Sample description",
    type: CoffeType.Robusta,
    price: 5.99,
    imageUrl: "sample-image-url",
  };

  it("renders coffee details correctly", () => {
    const { getByText, getByRole } = render(<CoffeeCard coffee={mockCoffee} />);

    expect(getByText("Sample Coffee")).toBeInTheDocument();
    expect(getByText("Sample description")).toBeInTheDocument();
    expect(getByText("5.99 €")).toBeInTheDocument();

    const coffeeTypeLabel = getByText("Robusta");
    expect(coffeeTypeLabel).toBeInTheDocument();
    expect(coffeeTypeLabel).toHaveClass("bg-neutral-700");
  });

  it("applies custom styles to the CoffeeCard component", () => {
    const { container } = render(
      <CoffeeCard coffee={mockCoffee} styles="custom-styles" />,
    );

    const coffeeCard = container.firstChild;
    expect(coffeeCard).toHaveClass("relative bg-mvst_zinc custom-styles");
  });
});
