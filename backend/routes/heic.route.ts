import express from "express";
const router = express.Router();
import { heictojpg,heictopng,heictowebp } from "../controllers/heic.controller";


router.route("/heictopng").post(heictopng);
router.route("/heicjpg").post(heictojpg);
router.route("/heictowebp").post(heictowebp);


export default router;
