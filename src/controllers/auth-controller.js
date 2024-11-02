import bcrypt from 'bcryptjs'
import { User } from "../models/user.js";
import { CustomError } from "../utils/custom-error.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../helpers/dotenv-secrets.js";

export const registerUser = async (req, res, next) => {
  //console.log(req.body)
  try {
    const { username, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password);

    const findUser = await User.findOne({ email });
    if (findUser) {
      return next(new CustomError(400, "User already exists"));
    }

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    return res.status(200).send({
      success: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
    console.log(JWT_SECRET)
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return next(new CustomError(404, "User not found"));
    }

    if (!bcrypt.compareSync(password, findUser.password)) {
      return next(new CustomError(400, "Bad credentials"));
    }

    const token = jwt.sign(
      {
        id: findUser._id,
        email: email,
      },
      JWT_SECRET,
      { expiresIn: "120m" }
    );

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const checkAuth = (req, res) => {
  return req.user
    ? res.status(200).json({ message: "Welcome" })
    : res.status(200).json({ message: "user not found" });
};
