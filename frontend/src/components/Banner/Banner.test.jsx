import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner Component", () => {
  it("renders with correct props", () => {
    const title = "Sample Title";
    const text = "Sample Text";
    const btnText = "Sample Button";
    const styles = "custom-styles";

    const { getByText, getByRole, container } = render(
      <Banner title={title} text={text} btnText={btnText} styles={styles} />,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
    expect(getByRole("button", { name: btnText })).toBeInTheDocument();

    // Check if the component has the custom styles applied
    expect(container.firstChild).toHaveClass(styles);
  });

  it("renders with default styles if styles prop is not provided", () => {
    const title = "Sample Title";
    const text = "Sample Text";
    const btnText = "Sample Button";

    const { getByRole, container } = render(
      <Banner title={title} text={text} btnText={btnText} />,
    );

    // Check if the component has default styles applied (grid and justify-center)
    expect(container.firstChild).toHaveClass("grid justify-center");
  });
});
