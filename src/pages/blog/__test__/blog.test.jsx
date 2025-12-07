import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Blog } from "../Blog"; // <--- CHANGE IS HERE (Default Import)
import { generate } from "random-words";
import axios from "../__mocks__/axios";
import { MemoryRouter } from "react-router-dom";

function l(e) {
  console.log("============");
  console.log(e);
  console.log("============");
}
function renderi(e) {
  render(e, { wrapper: MemoryRouter });
}
describe("test header", () => {
  test("title test operations", () => {
    // 1. **RENDER** the component into the simulated DOM
    renderi(<Blog />);

    // 2. **QUERY** the rendered output
    const titleElement = screen.getByRole("heading", { level: 1 });
    const btnTitleElement = screen.getByRole("title-change");

    // 3. **ASSERT** the results
    expect(titleElement).toHaveTextContent("My Awesome Blog");

    fireEvent.click(btnTitleElement);

    expect(titleElement).toHaveTextContent("Updated Blog Title");

    fireEvent.click(btnTitleElement);
    fireEvent.click(btnTitleElement);
    fireEvent.click(btnTitleElement);

    expect(titleElement).toHaveTextContent("Updated Blog Title");
  });
  test("subTitle test operations", () => {
    // 1. **RENDER** the component into the simulated DOM
    renderi(<Blog />);

    // 2. **QUERY** the rendered output
    const contentElement = screen.getByRole("heading", { level: 2 });
    const btnContentElement = screen.getByRole("subTitle-change");

    // 3. **ASSERT** the results
    expect(contentElement).toHaveTextContent("Learning React useState with");

    fireEvent.click(btnContentElement);

    expect(contentElement).toHaveTextContent("React Hooks in Action");

    fireEvent.click(btnContentElement);
    fireEvent.click(btnContentElement);
    fireEvent.click(btnContentElement);

    expect(contentElement).toHaveTextContent("React Hooks in Action");
  });
  test("content test operations", () => {
    // 1. **RENDER** the component into the simulated DOM
    renderi(<Blog />);

    // 2. **QUERY** the rendered output
    const contentElement = screen.getByTestId("paragraph-content");
    const btnContentElement = screen.getByRole("content-change");

    // 3. **ASSERT** the results
    expect(contentElement).toHaveTextContent(
      "This is the first paragraph of my blog."
    );

    fireEvent.click(btnContentElement);

    expect(contentElement).toHaveTextContent("This is updated blog content!");

    fireEvent.click(btnContentElement);
    fireEvent.click(btnContentElement);
    fireEvent.click(btnContentElement);

    expect(contentElement).toHaveTextContent("This is updated blog content!");
  });
  it("", () => {
    renderi(<Blog />);
    let n = 0;
    const btnLike = screen.getByTestId("btn-like");
    expect(btnLike.textContent.trim()).toBe(`👍 Like ${n}`);
    fireEvent.click(btnLike);
    n += 1;
    fireEvent.click(btnLike);
    n += 1;
    fireEvent.click(btnLike);
    n += 1;

    expect(btnLike.textContent.trim()).toEqual(`👍 Like ${n}`);
  });
});

describe("test Main View", () => {
  it("test comment input-area", () => {
    renderi(<Blog />);
    const btnComment = screen.getByTestId("btn-comment");
    const inputComment = screen.getByPlaceholderText("Write a comment...");
    fireEvent.click(btnComment);
    expect(inputComment.value).toEqual("");
  });

  test("should add a new comments to the list", async () => {
    renderi(<Blog />);

    const btnComment = screen.getByTestId("btn-comment");
    const inputComment = screen.getByPlaceholderText("Write a comment...");

    let word;
    for (let index = 0; index < 3; index++) {
      word = generate();
      // 1. توليد الكلمة والكتابة
      await userEvent.type(inputComment, word);
      // 2. الضغط على الزر لإضافة التعليق
      fireEvent.click(btnComment);
    }

    // 3. استخراج العناصر *بعد* التحديث (هنا يكمن السر)
    const listComments = screen.queryAllByRole("listitem");

    // 4. التأكد من النتيجة
    expect(listComments.length).toBeGreaterThan(0);
    expect(listComments[listComments.length - 1]).toHaveTextContent(word);
  });
});
describe("test Footer", () => {
  it("test Testing the presence of the footer Header ", () => {
    renderi(<Blog />);

    const header = screen.getByRole("heading", { level: 4 });
    const paragraphFooter = screen.getByTestId("paragraph-footer");

    expect(header.innerHTML).toBe("Extra Info");
    expect(paragraphFooter.innerHTML).toBe(
      "React makes building UIs fun and interactive."
    );
  });
  it("test btn hello by modern method", async () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    const user = userEvent.setup();

    renderi(<Blog />);

    const button = screen.getByRole("button", { name: /say hello/i });
    await user.click(button);

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith("Hello from React!");

    alertSpy.mockRestore();
  });
  it("test btn hello by old method", () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderi(<Blog />);

    const button = screen.getByRole("button", { name: /say hello/i });
    fireEvent.click(button);

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith("Hello from React!");

    alertSpy.mockRestore();
  });
});

// أهم سطر: تفعيل المحاكاة
vi.mock("axios");

describe("API Mocking Test", () => {
  it("should fetch and display user name", async () => {
    renderi(<Blog />);
    const userElement = await screen.findByText(/bashar/i);
    expect(userElement).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/users");
  });
});
