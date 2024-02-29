import express from 'express';
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
const DATABASE_URL= "./database.json"

const users = fs.readFileSync(DATABASE_URL, (error)=>{
   console.log(error);
})

 const PORT = 8080;

 app.get ("/", (request, response)=>{
   console.log(JSON.parse(users));
 })

 app.post ("/", (request, response)=>{
   console.log(request.body);
   response.send(" post AMJILTTAI")
 })

 app.listen (PORT, (request, response)=>{
   console.log(`express server is working on ${PORT}`);
 })