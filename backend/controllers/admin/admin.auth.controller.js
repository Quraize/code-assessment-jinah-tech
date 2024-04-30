import Admin from "../../models/admin.model.js";
import { errorHandler } from "../../utils/erroe.handler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validAdmin = await Admin.findOne({ email });
    if (!validAdmin) {
      return next(errorHandler(404, "Admin not found."));
    }
    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials"));
    }
    const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET);
     //getting rid of password from the response
     const { password: hashedpassword, ...rest } = validAdmin._doc;
    //adding an expiry date to the cookie
    const expiryDate = new Date(Date.now() + 86400000);
    res
      .cookie("access_token", token, { httpOnly: true , expires:expiryDate})
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export default authAdmin;