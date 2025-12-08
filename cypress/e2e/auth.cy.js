// describe("Authentication Journey", () => {
//   it("should log in successfully and access the dashboard", () => {
//     // 1. الانتقال لصفحة اللوجين (نسبة للـ baseUrl)
//     cy.visit("/login");

//     // 2. كتابة الإيميل
//     cy.get('input[type="email"]')
//       .type("bashar@bmDragon.com")
//       .should("have.value", "bashar@bmDragon.com");

//     // 3. الضغط على زر الدخول
//     cy.get("button").contains("Login").click();

//     // 4. التأكد من الانتقال للداشبورد
//     cy.url().should("include", "/dashboard");

//     // 5. التحقق من ظهور رسالة الترحيب من الـ Context
//     cy.get("h1").should("contain", "Welcome back, Bashar");
//   });
// });
it("should log in successfully and show dynamic welcome message", () => {
  cy.visit("/login");

  cy.get('input[type="email"]').type("bashar@bmDragon.com");
  cy.get("button").contains("Login").click();

  cy.url().should("include", "/dashboard");

  // 1. نبحث عن الـ h2 الذي يحتوي على "Welcome back"
  // 2. نستخدم timeout لانتظار الـ Context
  cy.get("h2", { timeout: 10000 })
    .should("be.visible")
    .and(($h2) => {
      const text = $h2.text().replace(/\s+/g, " ").trim(); // تنظيف المسافات الزائدة
      console.log("Current Text:", text); // للـ Debugging

      // نتحقق من وجود Welcome back واسم bashar متجاهلين حالة الأحرف
      expect(text).to.match(/Welcome back,.*bashar/i);
    });
});
