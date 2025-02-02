import express from "express";
const router = express.Router();
import { pngtojpg,pngtowebp } from "../controllers/png.controller";



router.route("/pngtojpg").post(pngtojpg);
router.route("/pngtowebp").post(pngtowebp);


export default router;
