import uploadImage from "../config/cloudinary.js";
import generateToken from "../config/token.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    // Get input
    const { firstName, lastName, userName, email, password } = req.body;

    console.log("Signup attempt:", { firstName, lastName, userName, email });
    console.log("File received:", req.file ? "Yes" : "No");

    let profileImage;
    if (req.file) {
      console.log("Processing profile image from path:", req.file.path);
      profileImage = await uploadImage(req.file.path);
      if (!profileImage) {
        console.log("Profile image upload failed");
        return res.status(400).json({
          message: "Failed to upload profile image",
        });
      }
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      profileImage,
    });

    // Generate token
    const token = generateToken(newUser._id);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send response
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        userName: newUser.userName,
        profileImage: newUser.profileImage,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User doesnot exist" });
    }
    let match = await bcrypt.compare(password, existingUser.password);

    if (!match) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    const token = generateToken(existingUser._id);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "User found successfully",
      user: {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        userName: existingUser.userName,
        profileImage: existingUser.profileImage,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "INternal server error" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch user" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "User Log out succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Log out Failed" });
  }
};
