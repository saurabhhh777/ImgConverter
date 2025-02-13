import express from "express";
const router = express.Router();
import { heictojpg,heictopng,heictowebp } from "../controllers/heic.controller";


router.route("/heictopng").post(heictopng);
router.route("/heictojpg").post(heictojpg);
router.route("/heictowebp").post(heictowebp);


export default router;
