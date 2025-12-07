import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { vi } from "vitest";

/**
 * دالة رندر مخصصة تدعم الـ Context والـ Router
 * @param {Object} mockUser - بيانات اليوزر الوهمية (null للحالة الافتراضية)
 * @param {String} initialRoute - المسار الذي يبدأ منه التست
 */

export function renderi(ui, { mockUser = null, initialRoute = "/" } = {}) {
  const contextValue = {
    user: mockUser,
    login: vi.fn(),
    logout: vi.fn(),
  };

  return render(
    <UserContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={[initialRoute]}>{ui}</MemoryRouter>
    </UserContext.Provider>
  );
}

export * from "@testing-library/react";

export function logi(e) {
  console.log("============");
  console.log(e);
  console.log("============");
}
