import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get("/status", controller.status);

router.get("/temp", controller.temp);

router.get("/suspend", controller.suspend);

export default router;
