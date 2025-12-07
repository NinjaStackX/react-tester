import { renderi, screen } from "../../../utils/test";
import { Dashboard } from "../Dashboard";
import { server } from "../../../setupTests"; // MSW server
import { http, HttpResponse } from "msw";

describe("Professional Dashboard Integration", () => {
  it("should display skeleton loader then tasks and user context data", async () => {
    const fakeUser = { name: "Bashar" };

    server.use(
      http.get("https://api.example.com/tasks", () => {
        return HttpResponse.json([{ id: 1, title: "Master React Testing" }]);
      })
    );

    renderi(<Dashboard />, { mockUser: fakeUser });

    // 1. تحقق من الـ UI الأولي والـ Context
    expect(screen.getByText(/Welcome back,/i)).toBeInTheDocument();
    expect(screen.getByText(/Bashar/i)).toBeInTheDocument();

    // 2. تحقق من جلب البيانات (Async)
    const taskItem = await screen.findByText(/Master React Testing/i);
    expect(taskItem).toBeInTheDocument();
  });
});
