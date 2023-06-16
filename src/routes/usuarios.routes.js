import express from "express";
import { getUsuarios, getUsuariosPorId } from "../controllers/usuarios.controller.js";
const router = express.Router();

router.get("/", getUsuarios);
router.get("/id/:id", getUsuariosPorId);

export default router;
