export const create = async (req, res) => {
  try {
    let { name, age, email } = req.body;
    const newUser = await User.create({
      name,
      age,
      email,
    });
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
import { User } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const user = await User.create({
      name,
      age,
      email,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { name } = req.params;

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { name, age } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { name, age },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { name } = req.params;

    const user = await User.findOneAndDelete({ name });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
