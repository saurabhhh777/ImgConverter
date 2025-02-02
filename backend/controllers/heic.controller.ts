import { Request, Response } from "express";
import heicConvert from "heic-convert";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() }).single("heicFile");

export const heictojpg = async (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error("Multer error:", err);
        return res.status(400).json({
          message: "File upload error",
          success: false,
        });
      }

      if (!req.file) {
        console.error("No file received in request.");
        return res.status(400).json({
          message: "No file uploaded",
          success: false,
        });
      }

      console.log("Received file:", req.file.originalname, req.file.mimetype);

      if (!["image/heic", "image/heif"].includes(req.file.mimetype)) {
        console.error("Invalid file type:", req.file.mimetype);
        return res.status(400).json({
          message: "Invalid file type. Only HEIC/HEIF files are allowed.",
          success: false,
        });
      }

      console.log("Converting file...");
      const jpegBuffer = await heicConvert({
        buffer: req.file.buffer,
        format: "JPEG",
        quality: 0.8,
      });

      console.log("Conversion successful!");

      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Content-Disposition", 'attachment; filename="converted.jpg"');
      res.send(jpegBuffer);
    } catch (error) {
      console.error("Conversion error:", error);
      return res.status(500).json({
        message: "Server error, please try again later!",
        success: false,
      });
    }
  });
};




export const heictopng = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error, please try again later !",
      success: false,
    });
  }
};





export const heictowebp = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error, please try again later !",
      success: false,
    });
  }
};
