import { vi } from "vitest";

export default {
  // نحاكي دالة الـ get لتكون دالة وهمية (spy) تعيد بيانات ناجحة
  get: vi.fn().mockResolvedValue({
    data: {
      results: [{ name: { firstName: "bashar" } }],
    },
  }),
  // يمكنك إضافة post, put إلخ بنفس الطريقة
  post: vi.fn().mockResolvedValue({ status: 201 }),
};
