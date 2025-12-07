import { http } from "msw";
import { mockUsers } from "../utils/mockData";

export const handlers = [
  http.get("/api/user", () => {
    return Response.json(mockUsers);
  }),
];
