# 🌦️ Weather App

A full-stack weather application that provides real-time weather data and a 5-day forecast with intelligent city search suggestions.

Built using **React + TypeScript** on the frontend and **Node.js + Express** on the backend, powered by the **OpenWeather API**.

---

## ✨ Features

- 🔍 City search with autocomplete suggestions
- 🌡️ Current weather conditions
- 📅 5-day weather forecast
- 🌍 Accurate results using latitude & longitude
- ⚡ Fast data fetching with React Query
- 🎨 Smooth animations with Framer Motion
- 🔐 Secure API key handling

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- Framer Motion
- TanStack React Query

### Backend
- Node.js
- Express
- OpenWeather API
- Axios
- Nodemon

---

## 📂 Project Structure

```text
weather-app/
├── frontend/
│ ├── src/
│ ├── public/
│ └── index.html
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ └── services/
│ ├── server.js
│ └── .env.example
│
└── README.md
```
---

## ⚙️ Environment Variables

Create a `.env.local` file inside the **backend** folder:

```text
OPENWEATHER_API_KEY=your_openweather_api_key_here
PORT=5000
```

> `.env` and `.env.local` files are ignored via `.gitignore`.

---

## 🚀 Getting Started

### Backend

```text
cd backend
npm install
npm run dev
```
Backend runs on:
http://localhost:5000

---

### Frontend

```text
cd frontend
npm install
npm run dev
```
Frontend runs on:
http://localhost:8080

---

## 🔁 API Endpoints

### Weather
```text
GET /api/weather?city=Delhi
GET /api/weather?city=lat,lon
```

### City Suggestions
```text
GET /api/cities?query=del
```

---

## 🔐 Security

- API keys are never committed
- Environment variables are protected
- `.env.example` provided for reference

---


## 👩‍💻 Author

**Nandini Saxena**  
B.Tech CSE | Full-Stack Developer | DSA Enthusiast

---

⭐ If you like this project, consider starring the repository.