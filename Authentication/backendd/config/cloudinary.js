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
    console.log("Starting Cloudinary upload for file:", filePath);
    console.log({
      cloudName: !!process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: !!process.env.CLOUDINARY_API_KEY,
      apiSecret: !!process.env.CLOUDINARY_SECRET_KEY,
    });

    if (!filePath) {
      console.log("No file path provided");
      return null;
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log("File does not exist at path:", filePath);
      return null;
    }

    console.log("Uploading file to Cloudinary...");
    const result = await cloudinary.uploader.upload(filePath);
    console.log("Cloudinary upload successful:", result.secure_url);

    // Delete image from local public folder
    fs.unlinkSync(filePath);
    console.log("Local file deleted");

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);

    // Delete local file if it exists
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("Local file deleted due to error");
    }

    return null;
  }
};

export default uploadImage;
