import {Request,Response} from "express";


export const pdftoword = (req:Request,res:Response)=>{
    try {



    } catch (error) {
        console.log(error);
        res.status(500).json({
            messsage:"Server error , please try again later !",
            success:false,
        });
    }

}
