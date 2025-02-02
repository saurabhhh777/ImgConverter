import express from "express";
const router = express.Router();
import { pngtojpg,pngtowebp,testapi } from "../controllers/png.controller";



router.route("/pngtojpg").post(pngtojpg);
router.route("/pngs").get(testapi);
router.route("/pngtowebp").post(pngtowebp);


export default router;
