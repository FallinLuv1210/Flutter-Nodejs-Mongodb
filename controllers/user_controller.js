const UserService = require("../services/user_services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successRes = await UserService.registerUser(email, password);

    res.json({ status: true, success: "Dang ky thanh cong" });
  } catch (err) {
    throw err;
  }
};
