import axios from "axios";

export async function geocodeCity(city) {
  const url = "https://geocoding-api.open-meteo.com/v1/search";

  const { data } = await axios.get(url, {
    params: { name: city, count: 1, language: "en" },
  });

  const place = data?.results?.[0];
  if (!place) return null;

  return {
    name: place.name,
    country: place.country,
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone,
  };
}

export async function fetchForecast({ latitude, longitude, timezone }) {
  const url = "https://api.open-meteo.com/v1/forecast";

  const { data } = await axios.get(url, {
    params: {
      latitude,
      longitude,
      timezone: timezone || "auto",
      current: "temperature_2m,relative_humidity_2m,wind_speed_10m",
      daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
      forecast_days: 3,
    },
  });

  return data;
}