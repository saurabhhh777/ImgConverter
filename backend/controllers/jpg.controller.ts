import { Request, Response } from 'express';
import sharp from 'sharp';
import multer from 'multer';

const upload = multer();  // Use memory storage

export const jpgtopng = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("JPG to PNG Controller is working now!");

    if (!req.file) {
      console.log("No file uploaded");
      res.status(400).json({
        message: 'No file uploaded',
        success: false,
      });
      return;
    }

    console.log("File received:", req.file.originalname);

    const pngBuffer = await sharp(req.file.buffer).png({ quality: 90 }).toBuffer();

    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="converted.png"',
    });

    res.send(pngBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error, please try again later",
      success: false,
    });
  }
};

export const jpgtopdf = (req:Request,res:Response)=>{
    try {


        
    } catch (error) {
        
        console.log(error);       
        res.status(500).json({
            message:"Server error , please try again later !",
            success:false,
        });
    }

}


export const jpgtowebp = (req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error, please try again later !",
            success:false,
        });
    }

}