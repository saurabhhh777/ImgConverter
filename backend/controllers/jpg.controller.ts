import { Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';

// Configure Multer storage
const storage = multer.memoryStorage();

// Reusable file filter middleware for JPG files
const jpgFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Only JPG files are allowed!'));
  }
};

// Configure Multer upload middleware
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: jpgFileFilter,
}).single('image');

// Convert JPG to PNG
export const jpgToPng = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error('Upload error:', err);
        return res.status(400).json({
          message: err.message,
          success: false,
        });
      }

      if (!req.file) {
        return res.status(400).json({
          message: 'No file uploaded',
          success: false,
        });
      }

      // Convert JPG to PNG
      const pngBuffer = await sharp(req.file.buffer)
        .png({
          quality: 80,
        })
        .toBuffer();

      res.set({
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="converted.png"',
        'Content-Length': pngBuffer.length.toString(),
      });

      res.send(pngBuffer);
    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({
        message: 'Conversion failed. Please try again.',
        success: false,
      });
    }
  });
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