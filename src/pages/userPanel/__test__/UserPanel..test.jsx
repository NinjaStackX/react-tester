import { describe } from "vitest";
import { renderi, screen } from "../../../utils/test";
import { UserPanel } from "../UserPanel";
import axios from "../../../__mock__/axios";

describe("userPanel test", () => {
  test("loginPage message for guests", () => {
    renderi(<UserPanel />);

    expect(screen.getByText(/please log in/i)).toBeInTheDocument();
  });

  test("welcome message for user", async () => {
    const firstName = (await axios.get("www.bmDragon.com")).data.results[0].name
      .firstName;

    const fakeUser = { name: firstName };
    renderi(<UserPanel />, { mockUser: fakeUser });
    const username = await screen.findByText(/Welcome, bashar/i);
    expect(username).toBeInTheDocument();
  });
});
