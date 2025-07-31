const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();

dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

//   request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
//  set static folder
app.use(express.static(path.join(__dirname, "/public/")));
// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//  404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on port " + process.env.APP_PORT);
});
