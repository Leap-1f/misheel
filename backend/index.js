import express from 'express';
import cors from "cors";
import { sql } from './config/database.js';
import { user } from "./src/router/user.js";
import bcrypt from "bcrypt";


const app = express();
app.use(cors());
app.use(express.json())
const PORT = 8080;

app.use("/users", user)

 app.post("/signup", async (req, res) => {
  const {name, email, password} = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hash(password, salt); 
  user.push({name: name, password: hashedPassword, email: email})
  res.send("amjilltai uuslee")
 })
 app.post ("/signin", async (req, res)=>{
  const data = await sql`INSERT INTO users (name, email) VALUES ('gumbee','gumbee@gmail.com') RETURNING *`;
   console.log(data);
   res.send(data)
 })
 app.delete("/users/dropTable", async (req, res)=>{
  const data = await sql`DROP TABLE users`;
  res.send(data)
 })
 app.listen (PORT, (request, res)=>{
   console.log(`express server is working on ${PORT}`);
 })