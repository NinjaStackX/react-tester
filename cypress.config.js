import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/react-tester", // الرابط الأساسي لمشروعك
    video: true, // تصوير فيديو للاختبار
    screenshotOnRunFailure: true, // أخذ لقطة شاشة عند الفشل
    setupNodeEvents(on, config) {
      // هنا يمكنك إضافة مستمعي أحداث Node مثل تقارير الاختبار
    },
  },
});
