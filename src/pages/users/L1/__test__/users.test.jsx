import { vi } from "vitest";
import { getUser } from "../__mocks__/userService";
import { describe } from "vitest";

describe("test mock requests", () => {
  test("mock simple function", () => {
    const mockedGetUser = getUser;
    expect(mockedGetUser()).toEqual({ id: 99, name: "Mocked User" });
  });
  test("mock jest function", () => {
    const mockedGetUser = vi.fn(() => ({ id: 99, name: "Mocked User" }));

    expect(mockedGetUser()).toEqual({ id: 99, name: "Mocked User" });
    expect(mockedGetUser).toHaveBeenCalledTimes(1);
  });
});
