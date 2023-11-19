import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { expect, test } from "vitest";
import React from "react";

describe("App Component", () => {
  test("It should render the App.", () => {
    render(<App />);
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });

  test("It should enable the button if two textboxes were typed.", () => {
    render(<App />);
    const textBoxes = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

    textBoxes.forEach((textBox) => {
      fireEvent.change(textBox, { target: { value: "test123" } });
    });

    expect(button).toBeEnabled();
  });
});
