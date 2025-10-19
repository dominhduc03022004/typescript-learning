import {z} from "zod";

export const registerSchema = z.object({
    username: z.string().min(1,"Username không được để trống"),
    email: z.string().min(1,"Email không được để trống").email("Sai định dạng emal!")
})