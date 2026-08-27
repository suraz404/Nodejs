import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import "dotenv/config";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
const uploadImage = async (filePath) => {
  try {
    console.log({
      cloudName: !!process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: !!process.env.CLOUDINARY_API_KEY,
      apiSecret: !!process.env.CLOUDINARY_SECRET_KEY,
    });
    if (!filePath) {
      return null;
    }

    const result = await cloudinary.uploader.upload(filePath);

    // Delete image from local public folder
    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (error) {
    console.log(error);

    // Delete local file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return null;
  }
};

export default uploadImage;
