# 🌦️ Weather App

A full-stack weather application that provides real-time weather data and a 5-day forecast with intelligent city search suggestions.

Built using **React + TypeScript** on the frontend and **Node.js + Express** on the backend, powered by the **OpenWeather API**.

Designed with **scalability**, **API security**, and **clean separation of concerns** in mind.

---

## ✨ Features

- 🔍 City search with autocomplete suggestions
- 🌡️ Current weather conditions
- 📅 5-day weather forecast
- 🌍 Accurate geolocation-based results (lat/lon precision)
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

> `.env.local` file is ignored via `.gitignore`.
> `.env.example` included for onboarding clarity

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

## 🔐 Security & Best Practices

- API keys are never committed
- Environment variables are protected
- `.env.example` provided for reference
- Centralized API handling via backend services
- Clean error handling for failed requests

---


## 👩‍💻 Author

**Nandini Saxena**  
B.Tech CSE at IIIT Vadodara | Full-Stack Developer | DSA Enthusiast

---

⭐ If you like this project, feel free to star the repository.