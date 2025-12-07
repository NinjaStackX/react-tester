import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
export function logi(e) {
  console.log("============");
  console.log(e);
  console.log("============");
}
export function renderi(e) {
  render(e, { wrapper: MemoryRouter });
}
