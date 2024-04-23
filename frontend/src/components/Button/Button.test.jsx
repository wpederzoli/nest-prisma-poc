import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button Component", () => {
  it("renders with text and calls onClick when clicked", () => {
    const buttonText = "Click me";
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text={buttonText} onClick={onClickMock} />,
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    // Simulate a click on the button and check if the onClick handler is called
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders with custom class and font style", () => {
    const buttonText = "Custom Button";
    const customClass = "custom-class";
    const customFontStyle = "font-bold";

    const { getByText, container } = render(
      <Button
        text={buttonText}
        className={customClass}
        fontStyle={customFontStyle}
      />,
    );

    expect(container.firstChild).toHaveClass(customClass);

    const fontStyles = container.querySelector(".font-bold");
    expect(fontStyles).toBeInTheDocument();
  });

  it("renders disabled button", () => {
    const buttonText = "Disabled Button";
    const { getByText } = render(<Button text={buttonText} disable />);

    expect(getByText(buttonText)).toBeDisabled();
  });
});
