import User from "../model/User.js";
import { signUpValid, signInValid } from "../validates/user.js";
import bcryptjs, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_CODE } = process.env;

export const signUp = async (req, res) => {
  try {
    // validate
    const { error } = signUpValid.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // Kiem tra email
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email nay da duoc dki!",
      });
    }
    // ma hoa pass
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    // khoi tao user trong db
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    // Thong bao dki thanh cong
    // xoa mk di
    user.password = undefined;
    return res.status(200).json({
      message: "Dki thanh cong!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  const { error } = signInValid.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      message: errors,
    });
  }
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return res.status(401).json({ message: "Sai tài khoản" });
    }

    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    const token = jwt.sign({ id: user.id }, SECRET_CODE, { expiresIn: "1h" });

    user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProfileUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy người dùng",
      });
    }
    return res.status(200).json({
      message: "Lấy thông tin người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
