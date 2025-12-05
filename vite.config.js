// vite.config.js (مثال باستخدام React)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // <--- الجزء الخاص بـ Vitest
    globals: true, // يتيح لك استخدام 'describe', 'it', 'expect' عالميًا
    environment: "jsdom", // ضروري لاختبار مكونات React/DOM
    setupFiles: "./src/setupTests.js", //
  },
});
