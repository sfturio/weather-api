import { geocodeCity, fetchForecast } from "../services/weatherService.js";

function requireApiKey(req, res) {
  const expected = process.env.APP_API_KEY;
  if (!expected) return true; // dev mode

  const received = req.headers["x-api-key"];
  if (received !== expected) {
    res.status(401).json({ error: "Invalid API key" });
    return false;
  }
  return true;
}

export async function getWeatherByCity(req, res) {
  if (!requireApiKey(req, res)) return;

  try {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: "Missing query: city" });

    const location = await geocodeCity(city);
    if (!location) return res.status(404).json({ error: "City not found" });

    const forecast = await fetchForecast(location);
    res.json({ input: { city }, location, forecast });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather", details: error.message });
  }
}

export async function getWeatherByLatLon(req, res) {
  if (!requireApiKey(req, res)) return;

  try {
    const lat = Number(req.params.lat);
    const lon = Number(req.params.lon);

    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      return res.status(400).json({ error: "Invalid lat/lon" });
    }

    const forecast = await fetchForecast({ latitude: lat, longitude: lon, timezone: "auto" });
    res.json({ input: { lat, lon }, forecast });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather", details: error.message });
  }
}

export async function postWeatherByCity(req, res) {
  if (!requireApiKey(req, res)) return;

  try {
    const { city } = req.body;
    if (!city) return res.status(400).json({ error: "Missing body: city" });

    const location = await geocodeCity(city);
    if (!location) return res.status(404).json({ error: "City not found" });

    const forecast = await fetchForecast(location);
    res.json({ input: { city }, location, forecast });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather", details: error.message });
  }
}