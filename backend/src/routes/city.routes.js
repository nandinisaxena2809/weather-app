import { Router } from "express";
import { searchCities } from "../controllers/city.controller.js";

const router = Router();

router.get("/", searchCities);

export default router;
