import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (id) => {
  let token = jwt.sign({ id }, process.env.jwtSecret, { expiresIn: "1d" });
  return token;
};

export default generateToken;
