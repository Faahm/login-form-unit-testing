import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../src/components/LoginForm";
import { expect, test } from "vitest";
import React from "react";

test("It should be rendered.", () => {
  render(<LoginForm />);
  const textInput = screen.getByTestId("login-form");
  expect(textInput).toBeInTheDocument();
});

test("It should be able to type.", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByPlaceholderText("Enter username");
  const passwordInput = screen.getByPlaceholderText("Enter password");
  fireEvent.change(usernameInput, { target: { value: "test" } });
  fireEvent.change(passwordInput, { target: { value: "test123" } });
  expect(usernameInput.value).toBe("test");
  expect(passwordInput.value).toBe("test123");
});

test("It should render the label.", () => {
  render(<LoginForm />);
  const usernameLabel = screen.getByText("Username:");
  const passwordLabel = screen.getByText("Password:");
  expect(usernameLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});
