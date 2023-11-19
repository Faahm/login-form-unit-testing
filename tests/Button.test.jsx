import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button";
import { expect, test, vi } from "vitest";
import React from "react";

test("It should render the button.", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("It should be clicked.", async () => {
  const onClickMock = vi.fn();
  render(<Button onClick={onClickMock} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
});

test("It should be disabled", () => {
  render(<Button disabled={true} />);
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("It should render the text inside the button correctly.", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Login");
});
