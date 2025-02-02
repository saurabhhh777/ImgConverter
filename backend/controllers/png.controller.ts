import { Request, Response } from 'express';
import multer from 'multer';
import sharp from "sharp";

// Configure Multer storage
const storage = multer.memoryStorage();

// Reusable file filter middleware
const pngFileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only PNG files are allowed!'));
  }
};

// Configure Multer upload middleware
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 1
  },
  fileFilter: pngFileFilter
}).single("image"); // Changed field name to 'image' to match the request

export const pngtojpg = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error("Upload error:", err);
        return res.status(400).json({ 
          message: err.message,
          success: false 
        });
      }

      if (!req.file) {
        return res.status(400).json({ 
          message: "No file uploaded", 
          success: false 
        });
      }

      const jpgBuffer = await sharp(req.file.buffer)
        .jpeg({ 
          quality: 80,
          mozjpeg: true 
        })
        .toBuffer();

      res.set({
        "Content-Type": "image/jpeg",
        "Content-Disposition": 'attachment; filename="converted.jpg"',
        "Content-Length": jpgBuffer.length.toString()
      });

      res.send(jpgBuffer);

    } catch (error) {
      console.error("Conversion error:", error);
      res.status(500).json({
        message: "Conversion failed. Please try again.",
        success: false
      });
    }
  });
};

export const pngtowebp = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error("Upload error:", err);
        return res.status(400).json({ 
          message: err.message,
          success: false 
        });
      }

      if (!req.file) {
        return res.status(400).json({ 
          message: "No file uploaded", 
          success: false 
        });
      }

      const webpBuffer = await sharp(req.file.buffer)
        .webp({ 
          quality: 80,
          lossless: false 
        })
        .toBuffer();

      res.set({
        "Content-Type": "image/webp",
        "Content-Disposition": 'attachment; filename="converted.webp"',
        "Content-Length": webpBuffer.length.toString()
      });

      res.send(webpBuffer);

    } catch (error) {
      console.error("Conversion error:", error);
      res.status(500).json({
        message: "Conversion failed. Please try again.",
        success: false
      });
    }
  });
};

export const testapi = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      message: "API is working properly",
      success: true,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    console.error("Test API error:", error);
    res.status(500).json({
      message: "Server health check failed",
      success: false
    });
  }
};
