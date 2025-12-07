import { render, screen } from "@testing-library/react";
import Users from "../Users";
import { throwErrorByLocalServer } from "../../../setupTests";
import { describe } from "vitest";

describe("mock request with MSW", () => {
  test("handles server request", async () => {
    render(<Users isTset={true} />);
    const userElements = await screen.findAllByRole("listitem");
    userElements.forEach((element) => {
      expect(element).toBeVisible();
    });
  });

  test("handles server error", async () => {
    throwErrorByLocalServer();
    render(<Users isTset={true} />);
    const errorElement = await screen.findByText(/Error loading user/i);
    expect(errorElement).toBeInTheDocument();
  });
});
