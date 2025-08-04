import express from "express";
//app variable
const app = express();

//define middleware
app.use(express.json());

//connections and listeners
app.listen(5000, ()=>console.log("Server Open")); 