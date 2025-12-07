import { renderi, screen } from "../../../../utils/test";
import userEvent from "@testing-library/user-event";
import { Login } from "../Login";
import { Routes, Route } from "react-router-dom";

describe("Login UI & Navigation Logic", () => {
  it("shows validation error when email is empty", async () => {
    const user = userEvent.setup();
    renderi(<Login />);

    const submitBtn = screen.getByRole("button", { name: /login/i });
    await user.click(submitBtn);

    expect(screen.getByRole("alert")).toHaveTextContent(/email is required/i);
  });

  it("navigates to dashboard after successful form submission", async () => {
    const user = userEvent.setup();

    // نمرر المكونات داخل Routes لنختبر الانتقال الحقيقي
    renderi(
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<div>Dashboard Content</div>} />
      </Routes>
    );

    const emailInput = screen.getByLabelText(/email address/i);
    const submitBtn = screen.getByRole("button", { name: /login/i });

    // محاكاة إدخال بيانات صحيحة
    await user.type(emailInput, "bashar@example.com");
    await user.click(submitBtn);

    // التأكد من أن العنوان تغير وأن محتوى الـ Dashboard ظهر
    expect(await screen.findByText(/Dashboard Content/i)).toBeInTheDocument();
  });
});
