// cypress/e2e/home.cy.js
describe("Home Page Smoke Test", () => {
  it("should load the home page successfully", () => {
    // تأكد أن السيرفر شغال على هذا المنفذ
    cy.visit("http://localhost:5173/react-tester");
    cy.contains("Home").should("be.visible");
  });
});
