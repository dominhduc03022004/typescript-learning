import Joi from "joi";

export const categoryValid = Joi.object({
  name: Joi.string().required().min(2).max(100).messages({
    "string.empty": "Danh muc san pham khong dc de trong!",
    "any.required": "Danh muc san pham la bat buoc!",
    "string.min": "Danh muc san pham phai nhieu hon {#limit} ky tu",
    "string.max": "Danh muc san pham phai it hon {#limit + 1} ky tu",
  }),
  slug: Joi.string().required().min(2).max(100),
});
