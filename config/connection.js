import mongoose from 'mongoose'

export const connection= async()=>{
    try {
        await mongoose.connect(process.env.URL)    
        console.log("mongoose connected");
    } catch (error) {
        console.log(error);
    }
}

