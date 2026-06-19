# 🌦️ Forecastly - Weather App

A full-stack weather application that provides real-time weather data and a 5-day forecast with intelligent city search suggestions.

Built using **React + TypeScript** on the frontend and **Node.js + Express** on the backend, powered by the **OpenWeather API**.

Designed with **scalability**, **API security**, and **clean separation of concerns** in mind.

---

## 🌐 Live Demo

🔗 https://forecastly-weather-app.vercel.app/

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

## 🚀 Getting Started Locally

### Clone the Repository

```text
git clone https://github.com/your-username/weather-app.git
cd weather-app    # or weather-app-main if downloaded as ZIP
```

---

### Backend

```text
cd backend
npm install
```
Create a .env.local file inside the backend folder.  
```text
OPENWEATHER_API_KEY=your_openweather_api_key_here
PORT=5000
```

Start the backend server:
```text
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

I’m a B.Tech Computer Science student at IIIT Vadodara with a strong foundation in DSA and hands-on experience in full-stack MERN development. I enjoy building scalable, user-centric web applications and turning ideas into polished, real-world products.

---

⭐ If you like this project, feel free to star the repository.
