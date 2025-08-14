import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
// API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

// print only for checking server working or not 

app.get('/' , (req, res)=>{
  res.send("Hello world")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port https://blogapp-1-xq06.onrender.com/:${PORT}`);
});
