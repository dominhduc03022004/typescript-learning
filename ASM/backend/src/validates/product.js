import Joi from "joi";

export const productValid = Joi.object({
  name: Joi.string().required().min(2).max(100).messages({
    "string.empty": "Ten san pham khong dc de trong!",
    "any.required": "Ten san pham la bat buoc!",
    "string.min": "Ten san pham phai nhieu hon {#limit} ky tu",
    "string.max": "Ten san pham phai it hon {#limit + 1} ky tu",
  }),
  price: Joi.number().required().min(0).messages({
    "number.base": "Gia phai la so",
    "number.empty": "Gia san pham khong dc de trong!",
    "any.required": "Gia san pham la bat buoc!",
    "number.min": "Gia san pham phai nhieu hon {#limit}",
  }),
  description: Joi.string().required().min(2).max(500).messages({
    "any.required": "Mo ta san pham la bat buoc!",
    "string.min": "Mo ta san pham phai nhieu hon {#limit} ky tu",
    "string.max": "Mo ta san pham phai it hon {#limit + 1} ky tu",
  }),
  image: Joi.string(),
  categoryId: Joi.string().required().messages({
    "any.required": "Danh muc san pham la bat buoc!",
  }),
});
