import { Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';
import PDFDocument from "pdfkit";

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





export const jpgtopdf = (req: Request, res: Response) => {
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

      // Create a new PDF document
      const pdfDoc = new PDFDocument({ autoFirstPage: false });
      const chunks: Buffer[] = [];
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="converted.pdf"',
          'Content-Length': pdfBuffer.length.toString(),
        });
        res.send(pdfBuffer);
      });

      // Add an image to the PDF
      const imageBuffer = req.file.buffer;
      const metadata = await sharp(imageBuffer).metadata(); // Get dimensions
      pdfDoc.addPage({
        size: [metadata.width || 595, metadata.height || 842], // Set page size to image dimensions
      });
      pdfDoc.image(imageBuffer, 0, 0, { fit: [metadata.width || 595, metadata.height || 842] });

      // Finalize the PDF
      pdfDoc.end();
    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({
        message: 'Conversion failed. Please try again.',
        success: false,
      });
    }
  });
};


export const jpgtowebp = (req: Request, res: Response) => {
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

      // Convert JPG to WebP
      const webpBuffer = await sharp(req.file.buffer)
        .webp({ quality: 80 })  // Adjust quality as needed
        .toBuffer();

      res.set({
        'Content-Type': 'image/webp',
        'Content-Disposition': 'attachment; filename="converted.webp"',
        'Content-Length': webpBuffer.length.toString(),
      });

      res.send(webpBuffer);
    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({
        message: 'Conversion failed. Please try again.',
        success: false,
      });
    }
  });
};