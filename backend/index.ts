import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import pngRoute from "./routes/png.route";
import jpgRoute from "./routes/jpg.route";
import pdfRoute from "./routes/pdf.route";
import heicRoute from "./routes/heic.route";


dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(cookieParser());


app.use("/api/v1/png",pngRoute);
app.use("/api/v1/jpg",jpgRoute);
app.use("/api/v1/pdf",pdfRoute);
app.use("/api/v1/heic",heicRoute);






const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
    console.log(`Server is running at :${PORT}`);
});

