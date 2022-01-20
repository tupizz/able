import express from "express";
import cors from "cors";
import connectDB from "./backend/config/db.js";
import postRoute from "./backend/routes/postsRoute.js";

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/posts", postRoute);

// @todo - update error handler here
app.use(function errorHandler(err, _req, res, _next) {
  console.log(err);
  res.status(500).json({});
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
