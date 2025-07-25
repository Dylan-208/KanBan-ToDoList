import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./route";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

server.listen(process.env.PORT);
