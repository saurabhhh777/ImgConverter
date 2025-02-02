import {Request,Response} from "express";

export const heictojpg = (req:Request,res:Response)=>{
    try {
        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error, please try again later !",
            success:false,
        });
    }

}

export const heictopng = (req:Request,res:Response)=>{
    try {
        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error, please try again later !",
            success:false,
        });
    }

}

export const heictowebp = (req:Request,res:Response)=>{
    try {
        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error, please try again later !",
            success:false,
        });
    }

}

