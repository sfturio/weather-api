# Weather API (Node.js + Express)

Simple Weather API built with Node.js, Express, and Axios using the Open-Meteo API.
Allows fetching weather by **city name** or **latitude/longitude**.

---

## Tech Stack

* Node.js
* Express
* Axios
* dotenv
* cors

---

## Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root:

```env
PORT=3000
APP_API_KEY=123456
```

Run the server:

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## Endpoints

### GET /api/weather?city=CityName

Fetch weather using city name.

Example:

```bash
curl -H "x-api-key: 123456" "http://localhost:3000/api/weather?city=Porto%20Alegre"
```

---

### GET /api/weather/lat/:lat/lon/:lon

Fetch weather using latitude and longitude.

Example:

```bash
curl -H "x-api-key: 123456" "http://localhost:3000/api/weather/lat/-30.03/lon/-51.23"
```

---

### POST /api/weather

Fetch weather using request body.

Body:

```json
{
  "city": "Berlin"
}
```

Example:

```bash
curl -X POST "http://localhost:3000/api/weather" \
-H "Content-Type: application/json" \
-H "x-api-key: 123456" \
-d '{"city":"Berlin"}'
```

---

## Features

* Fetch weather by city
* Fetch weather by coordinates
* API key protection via header
* Clean project structure (routes, controllers, services)
* Async/await with error handling

---

## Author

Wesley Turio
Junior Fullstack Developer
