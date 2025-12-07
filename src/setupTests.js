// src/setupTests.js
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { handlers } from "./__mock__/handlers";
import { http } from "msw";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };

export function throwErrorByLocalServer() {
  server.use(
    http.get("/api/user", () => {
      return new Response(null, { status: 500 });
    })
  );
}
