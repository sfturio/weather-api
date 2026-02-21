import { Router } from "express";
import {
  getWeatherByCity,
  getWeatherByLatLon,
  postWeatherByCity,
} from "../controllers/weatherController.js";

const router = Router();

router.get("/", getWeatherByCity); // ?city=
router.get("/lat/:lat/lon/:lon", getWeatherByLatLon);
router.post("/", postWeatherByCity); // body: { city }

export default router;