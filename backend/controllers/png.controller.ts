import { Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';

// Configure Multer storage
const storage = multer.memoryStorage();

// File filter to allow only JPEG files
const jpegFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG files are allowed!'));
  }
};

// Configure Multer upload middleware
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: jpegFileFilter,
}).single('image');

// Controller for JPEG to PNG conversion
export const jpgtopng = (req: Request, res: Response): void => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Multer error:', err);
      res.status(400).json({ message: err.message, success: false });
      return;
    }

    if (!req.file) {
      console.log('No file uploaded');
      res.status(400).json({ message: 'No file uploaded', success: false });
      return;
    }

    try {
      console.log('File received:', req.file.originalname);

      const pngBuffer = await sharp(req.file.buffer).png({ quality: 90 }).toBuffer();

      res.set({
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="converted.png"',
      });

      res.send(pngBuffer);
    } catch (error) {
      console.error('Error converting image:', error);
      res.status(500).json({ message: 'Server error, please try again later', success: false });
    }
  });
};


// Convert PNG to JPG
export const PngToJpg = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        console.error('Upload error:', err);
        return res.status(400).json({ 
          message: err.message, 
          success: false 
        });
      }

      if (!req.file) {
        return res.status(400).json({ 
          message: 'No file uploaded', 
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
        'Content-Type': 'image/jpeg',
        'Content-Disposition': 'attachment; filename="converted.jpg"',
        'Content-Length': jpgBuffer.length.toString(),
      });

      res.send(jpgBuffer);

    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({
        message: 'Conversion failed. Please try again.',
        success: false,
      });
    }
  });
};

// Convert PNG to WebP
export const PngToWebp = async (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    try {
      
    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({ message: 'Conversion failed. Please try again.', success: false });
    }
  });
};



// Simple Test API
export const TestApi = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      message: 'API is working properly',
      success: true,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    });
  } catch (error) {
    console.error('Test API error:', error);
    res.status(500).json({
      message: 'Server health check failed',
      success: false,
    });
  }
};
