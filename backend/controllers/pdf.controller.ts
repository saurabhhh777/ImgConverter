import { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import pdfParse from "pdf-parse";
import { Document, Packer, Paragraph, AlignmentType, TextRun } from "docx";

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "uploads");
(async () => {
  try {
    await fs.access(uploadDir);
    console.log("📁 'uploads' directory exists.");
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
    console.log("📁 'uploads' directory created.");
  }
})();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    console.log(`📄 Saving file as: ${uniqueSuffix}`);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

export const pdftoword = [
  upload.single("pdf"),
  async (req: Request, res: Response): Promise<void> => {
    console.log("➡️ Received request to /pdftoword");

    if (!req.file) {
      console.log("❗ No file received");
      res.status(400).json({ message: "No PDF file uploaded", success: false });
      return;
    }

    const uploadedFilePath = req.file.path;
    console.log(`✅ PDF file uploaded: ${uploadedFilePath}`);

    try {
      const pdfData = await fs.readFile(uploadedFilePath);
      const pdfContent = await pdfParse(pdfData);

      // Split text into paragraphs and create a Word document
      const paragraphs = pdfContent.text.split("\n").map((line) => {
        return new Paragraph({
          children: [
            new TextRun({
              text: line.trim(),
              break: 1, // Add a line break after each paragraph
            }),
          ],
          alignment: AlignmentType.LEFT, // Align text to the left
        });
      });

      const doc = new Document({
        sections: [{ children: paragraphs }],
      });

      const outputFilePath = path.join(uploadDir, "converted.docx");
      const buffer = await Packer.toBuffer(doc);
      await fs.writeFile(outputFilePath, buffer);

      console.log(`📄 Word file created: ${outputFilePath}`);

      res.download(outputFilePath, "converted.docx", async (err) => {
        if (err) {
          console.error("❗ Error sending the file:", err);
          res.status(500).json({ message: "Error downloading the file", success: false });
        }
        try {
          await fs.unlink(outputFilePath);
          console.log("🗑️ Temporary Word file deleted.");
        } catch (unlinkErr) {
          console.error("❗ Error deleting the Word file:", unlinkErr);
        }
      });
    } catch (error) {
      console.error("❗ Conversion error:", error);
      res.status(500).json({ message: "Server error, please try again later!", success: false });
    }
  },
];
