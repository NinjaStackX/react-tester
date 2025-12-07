import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
export function renderi(component) {
  // return render(<MemoryRouter>{component}</MemoryRouter>);
  return render(component, { wrapper: MemoryRouter });
}

export function logi(e) {
  console.log("============");
  console.log(e);
  console.log("============");
}
