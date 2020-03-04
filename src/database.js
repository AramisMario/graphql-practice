import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
            useNewUrlParser:true,
        });
        console.log("db is conected");
    }catch{
        console.log('something went wrong');
    }  
}

