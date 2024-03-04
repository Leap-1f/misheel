import express from 'express';
import cors from "cors";
import fs from "fs";
import { sql } from './config/database.js';
import { user } from "./src/router/user.js";


const app = express();
app.use(cors());
app.use(express.json())
const PORT = 8080;

app.use("/users", user)

 app.post("/users", async (req, res) => {
  const data = await sql`INSERT INTO users (name, email) VALUES ('gumbee','gumbee@gmail.com') RETURNING *`;
  res.send(data)
 })
 app.post ("/users/createTable", async (req, res)=>{
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