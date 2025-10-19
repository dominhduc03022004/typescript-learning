import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/User.js";
dotenv.config();

const { SECRET_CODE } = process.env;

export const checkAuth = async (req, res, next) => {
  try {
    // Kiem tra ng dung dn chua
    const token = req.headers.authorization?.split(" ")[1];
    // Kiem tra token
    if (!token) {
      return res.status(403).json({
        message: "Chua dang nhap",
      });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, SECRET_CODE);
      // console.log('decoded: ', decoded);
    } catch (error) {
      return res
        .status(403)
        .json({ message: "Token không hợp lệ hoặc đã hết hạn" });
    }
    const user = await User.findById(decoded.userId);
    req.userId = user._id;
    next();
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
