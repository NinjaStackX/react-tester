import { http } from "msw";
import { mockUsers } from "../utils/mockData";

export const handlers = [
  http.get("/api/user", () => {
    return Response.json(mockUsers);
  }),
  http.get("https://api.example.com/tasks", () => {
    return HttpResponse.json([
      { id: 1, title: "Learn Unit Testing with MSW" },
      { id: 2, title: "Build a SaaS MVP" },
    ]);
  }),
];
