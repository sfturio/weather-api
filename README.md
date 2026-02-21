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
Example response:
```bash
{
  "input": {
    "city": "Berlin"
  },
  "location": {
    "name": "Berlin",
    "country": "Germany",
    "latitude": 52.52,
    "longitude": 13.41
  },
  "forecast": {
    "current": {},
    "daily": {}
  }
}
```
---
Project Structure:
```bash
weather-api/
│
├── src/
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── controllers/
│   │   └── weatherController.js
│   └── services/
│       └── weatherService.js
│
├── index.js
├── package.json
├── .env
└── README.md
```
---
## Features

* Fetch weather by city
* Fetch weather by coordinates
* API key protection via header
* Clean project structure (routes, controllers, services)
* Async/await with error handling

---

## Future Improvements

- Improve error handling
- Add request validation
- Add caching for faster responses
- Add rate limiting
- Add API documentation
- Add automated tests
- Add Docker support
- Build a frontend to consume this API (react)

## Author

Wesley Turio
Junior Fullstack Developer
