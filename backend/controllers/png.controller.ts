import { Request, Response } from 'express';

export const pngtojpg =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong !",
            success:false,
        });


    }

}


export const pngtowebp = (req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Server error , please try again later !",
            success:false
        });
    }

}