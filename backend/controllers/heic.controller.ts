import { Request, Response } from "express";
import path from "path";
import heicConvert from "heic-convert";
import multer from "multer";
import sharp from "sharp";

const upload = multer({ storage: multer.memoryStorage() }).single("image");

export const heictojpg = async (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error("Multer error:", err);
        return res.status(400).json({ message: "File upload error", success: false });
      }

      if (!req.file) {
        console.error("No file received.");
        return res.status(400).json({ message: "No file uploaded", success: false });
      }

      console.log("Received file:", req.file.originalname, req.file.mimetype);

      // Check file extension
      const ext = path.extname(req.file.originalname).toLowerCase();
      if (![".heic", ".heif"].includes(ext)) {
        console.error("Invalid file extension:", ext);
        return res.status(400).json({
          message: "Invalid file type. Only HEIC/HEIF files are allowed.",
          success: false,
        });
      }

      console.log("Converting file...");
      const buffer = await heicConvert({
        buffer: req.file.buffer,
        format: "JPEG", // Output format
        quality: 80, // Output quality
      });

      console.log("Conversion successful!");
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Content-Disposition", 'attachment; filename="converted.jpg"');
      res.send(buffer);
    } catch (error) {
      console.error("Conversion error:", error);
      return res.status(500).json({ message: "Server error, please try again later!", success: false });
    }
  });
};






export const heictopng = async(req: Request, res: Response) => {
  try {
    upload(req,res,async(err)=>{
      if(err){
        console.log(err);
        return res.status(400).json({
          message:"File upload error",
          success:false,
        });
      }

      if(!req.file){

        console.log("No file received !");
        return res.status(400).json({
          message:"No file uploaded !",
          success:false,
        });
      }

      console.log("Received File :",req.file.originalname,req.file.mimetype);


      const ext = path.extname(req.file.originalname).toLowerCase();
      if(![".heic","heif"].includes(ext)){
        console.log("Invalid file type");
        return res.status(400).json({
          message:"Invalid file type. Only HEIC/HEIF file are allowed",
          success:false,
        });
      }

      console.log("Converting file to PNG....");

      const buffer = await heicConvert({
        buffer:req.file.buffer,
        format:"PNG",
        quality:80,
      });

      console.log("Conversion to PNG successfull !");

      res.setHeader("Content-Type","image/png");
      res.setHeader("Content-Disposition",'attachment; filename="converted.png"');
      res.send(buffer);

    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error, please try again later !",
      success: false,
    });
  }
};




export const heictowebp = async (req: Request, res: Response) => {
  try {
    // Handle file upload
    upload(req, res, async (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res.status(400).json({
          message: "File upload error",
          success: false,
        });
      }

      if (!req.file) {
        console.error("No file received.");
        return res.status(400).json({
          message: "No file uploaded",
          success: false,
        });
      }

      console.log("Received file:", req.file.originalname, req.file.mimetype);

      // Validate HEIC or HEIF file types
      const ext = path.extname(req.file.originalname).toLowerCase();
      if (![".heic", ".heif"].includes(ext)) {
        console.error("Invalid file type:", ext);
        return res.status(400).json({
          message: "Invalid file type. Only HEIC/HEIF files are allowed.",
          success: false,
        });
      }

      console.log("Converting HEIC file to JPEG...");

      // Convert HEIC to JPEG first using heic-convert
      try {
        const jpegBuffer = await heicConvert({
          buffer: req.file.buffer,
          format: "JPEG", // Convert to JPEG as intermediate format
          quality: 80,
        });

        console.log("JPEG conversion successful, now converting to WEBP...");

        // Convert the JPEG buffer to WEBP using sharp
        const webpBuffer = await sharp(jpegBuffer)
          .webp({ quality: 80 }) // Convert to WEBP format with quality setting
          .toBuffer(); // Get the buffer for the converted file

        console.log("Conversion to WEBP successful!");

        // Set response headers for WEBP image
        res.setHeader("Content-Type", "image/webp");
        res.setHeader("Content-Disposition", 'attachment; filename="converted.webp"');
        res.send(webpBuffer); // Send the WEBP buffer as the response
      } catch (conversionError) {
        console.error("Error during conversion:", conversionError);
        return res.status(500).json({
          message: "Error during conversion to WEBP",
          success: false,
        });
      }
    });
  } catch (error) {
    console.error("Error during HEIC to WEBP conversion:", error);
    res.status(500).json({
      message: "Server error, please try again later!",
      success: false,
    });
  }
};