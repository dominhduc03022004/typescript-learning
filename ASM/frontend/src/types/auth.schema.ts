import { z } from "zod";

export const signUpValid = z.object({
  userName: z.string().min(1, "username không được để trống"),
  email: z
    .email("Vui lòng nhập đúng định dạng email")
    .min(1, "Email không được để trống"),
  password: z
    .string()
    .min(1, "Mật khẩu không được để trống")
    .min(6, "Mật khẩu tối thiểu phải có 6 ký tự"),
  confirmPassword: z
    .string()
    .min(1, "Mô tả sản phẩm không được để trống")
    .min(6, "Mật khẩu tối thiểu phải có 6 ký tự"),
});

export type SignUpFormData = z.infer<typeof signUpValid>;

export const signInValid = z.object({
  email: z
    .email("Vui lòng nhập đúng định dạng email")
    .min(1, "Email không được để trống"),
  password: z
    .string()
    .min(1, "Mật khẩu không được để trống")
    .min(6, "Mật khẩu tối thiểu phải có 6 ký tự"),
});

export type SignInFormData = z.infer<typeof signInValid>;
