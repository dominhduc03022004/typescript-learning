import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  price: z.number().min(1, "Giá phải lớn hơn 0"),
  image: z.string().min(1, "Đường dẫn ảnh không được để trống"),
  description: z.string().min(1, "Mô tả sản phẩm không được để trống")
});

export type ProductFormData = z.infer<typeof productSchema>;