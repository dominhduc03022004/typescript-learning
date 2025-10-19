import Joi from "joi";

export const signUpValid = Joi.object({
    userName: Joi.string().required().min(3).max(100).messages({
        "string.empty": "userName khong dc de trong!",
        "any.required": "userName la bat buoc!",
        "string.min": "userName phai nhieu hon {#limit} ky tu",
        "string.max": "userName phai it hon {#limit + 1} ky tu",
    }),
    email: Joi.string().required().email().messages({
        "string.empty": "Email khong dc de trong!",
        "any.required": "Email la bat buoc!",
        "string.email": "Email khong dung dinh dang!",
    }),
    password: Joi.string().required().min(6).max(100).messages({
        "string.empty": "Password khong dc de trong!",
        "any.required": "Password la bat buoc!",
        "string.min": "Password phai nhieu hon {#limit} ky tu",
        "string.max": "Password phai it hon {#limit + 1} ky tu",
    }),
    confirmPassword: Joi.string().required().min(6).max(100).valid(Joi.ref("password")).messages({
        "string.empty": "confirmPassword khong dc de trong!",
        "any.required": "confirmPassword la bat buoc!",
        "string.min": "confirmPassword phai nhieu hon {#limit} ky tu",
        "string.max": "confirmPassword phai it hon {#limit + 1} ky tu",
        "any.only": "confirmPassword khong khop voi password"
    }),
    role: Joi.string()
})

export const signInValid = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty": "Email khong dc de trong!",
        "any.required": "Email la bat buoc!",
        "string.email": "Email khong dung dinh dang!",
    }),
    password: Joi.string().required().min(6).max(100).messages({
        "string.empty": "Password khong dc de trong!",
        "any.required": "Password la bat buoc!",
        "string.min": "Password phai nhieu hon {#limit} ky tu",
        "string.max": "Password phai it hon {#limit + 1} ky tu",
    })
})