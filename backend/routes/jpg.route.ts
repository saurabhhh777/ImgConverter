import express from "express";
const router = express.Router();
import {jpgtopng,jpgtopdf,jpgtowebp} from "../controllers/jpg.controller";


router.route("/jpgtopng").post(jpgtopng);
router.route("/jpgtopdf").post(jpgtopdf);
router.route("/jpgtowebp").post(jpgtowebp);



export default router;