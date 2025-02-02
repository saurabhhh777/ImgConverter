import exp from "constants";
import { Request,Response } from "express";



export const jpgtopng = (req:Request,res:Response)=>{
    try {



        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error , please try agian later",
            success:false,
        })

    }

}

export const jpgtopdf = (req:Request,res:Response)=>{
    try {


        
    } catch (error) {
        
        console.log(error);       
        res.status(500).json({
            message:"Server error , please try again later !",
            success:false,
        });
    }

}


export const jpgtowebp = (req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error, please try again later !",
            success:false,
        });
    }

}