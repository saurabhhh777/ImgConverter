import express from "express";
const router = express.Router();
import {jpgToPng,jpgtopdf,jpgtowebp} from "../controllers/jpg.controller";


router.route("/jpgtopng").post(jpgToPng);
router.route("/jpgtopdf").post(jpgtopdf);
router.route("/jpgtowebp").post(jpgtowebp);



export default router;