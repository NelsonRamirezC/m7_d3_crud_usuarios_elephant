import express from "express";
import morgan from "morgan";
import cors from "cors";
import usuarios from "./routes/usuarios.routes.js";
const app = express();

//middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/usuarios", usuarios);

export default app;
