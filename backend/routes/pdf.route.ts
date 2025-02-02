import express from "express";
const router = express.Router();
import {pdftoword} from "../controllers/pdf.controller";


router.route("/pdftoword").post(pdftoword);

export default router;