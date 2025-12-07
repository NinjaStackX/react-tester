import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCounter } from "../hook/useCounter";

describe("useCounter Custom Hook", () => {
  it("should start with the initial value", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });

  it("should increment the count when calling increment", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should reset the count when calling reset", () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(5);
  });
});
