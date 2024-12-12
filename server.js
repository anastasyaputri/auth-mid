// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import Router from "./app/routes/route.js";
// import mysql from "./app/config/mysql.config.js";
// import seq from "./app/config/sequelize.config.js";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./app/routes/route");
const seq = require("./app/config/sequelize.config");

const app = express();

app.use(bodyParser.json());

app.use(cors());

// Testing database connection
// try {
//   seq.authenticate();
//   //   mysql.connect();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// use router
app.use("/users", userRouter);

app.get("/", (req, res) => res.send("test"));

// listen on port
app.listen(8080, () => console.log("Server running at http://localhost:8080"));
