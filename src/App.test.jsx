import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "./App"; // <--- CHANGE IS HERE (Default Import)

test("renders the correct title and message", () => {
  // 1. **RENDER** the component into the simulated DOM
  render(<App />);

  // To complete the test (optional, but good practice):
  // 2. **QUERY** the rendered output
  const titleElement = screen.getByRole("heading", { name: /Vite \+ React/i });

  // 3. **ASSERT** the results
  expect(titleElement).toBeInTheDocument();
});
