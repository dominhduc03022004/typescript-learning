import User from "../model/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({
        message: "Không có quyền thực hiện hành động này!",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
