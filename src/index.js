import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import {connect }from "./database";
const app = express();
connect();
app.get('/',(req,res)=>{
    res.json({
        message:"Hello world"
    });
});


app.use('/graphql',graphqlHTTP({
    graphiql:true, //  herramienta de testeo
    schema:schema,
    context:{
        message:"prueba del context"
    }
}));


app.listen(3000,()=>console.log('server on port 3000'));