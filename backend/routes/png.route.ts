import express from "express";
const router = express.Router();
import { PngToJpg,PngToWebp,TestApi } from "../controllers/png.controller";



router.route("/pngtojpg").post(PngToJpg);
router.route("/pngs").get(TestApi);
router.route("/pngtowebp").post(PngToWebp);


export default router;
