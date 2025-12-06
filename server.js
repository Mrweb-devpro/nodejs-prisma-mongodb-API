const cookieParser = require("cookie-parser");
const express = require("express");

require("dotenv").config();
const app = express();

//-- regular middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRoutes");

app.use("/api", userRouter);

//-- routes
app.get("/", (req, res) => {
  res.send("Hi from David technologies");
});

//-- Run the server
app.listen(2000, () => {
  console.log("Server running on port 2000");
});
