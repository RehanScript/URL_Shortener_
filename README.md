# 🔗 URL Shortener (TinyURL Clone)

A simple **URL shortener** built with **Node.js, Express, and MongoDB**, similar to TinyURL.  
It allows users to create short links that redirect to long URLs.  

---

## ⚡ Features
- Generate a unique short URL for any link  
- Redirect from short URL → original long URL  
- Track visits (basic analytics with timestamps)  

---

## 🛠️ Tech Stack
- **Node.js + Express** → Backend server  
- **MongoDB + Mongoose** → Database & schema modeling  
- **Nanoid** → Generates unique short IDs  
- **Nodemon** → Auto-restart during development  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/url-shortner.git
cd url-shortner
```
### 2. Install dependencies, setup environment variables & run server
```bash
# Install required dependencies
npm install

# Create a .env file in the project root with:
MONGODB_URI=your-mongodb-connection-string
PORT=8001

# Start the development server
npm start
```
---
### 📡 API Endpoints
#### 🔹 Create a Short URL
##### POST /url
##### Body (JSON):
```json
{
  "url": "https://www.example.com/some/long/link"
}
```
##### Response:
```json
{
  "shortId": "abc123",
  "redirectURL": "https://www.example.com/some/long/link"
}
```
---
#### 🔹 Redirect to Original URL
##### GET /:shortId
```bash
http://localhost:8001/abc123
```
---
#### 🔹 Get Analytics
##### GET /analytics/:shortId
##### Example:
```bash
http://localhost:8001/analytics/abc123
```
---
##### Response:
```json
{
  "totalClicks": 5,
  "visitHistory": [
    { "timestamp": 1714489200000 },
    { "timestamp": 1714492800000 }
  ]
}
```
---
### 📌 Future Plans
#### ✅ Add detailed analytics (click count, referrer, location)

#### ✅ Show interstitial ad pages before redirect

#### ✅ Build user accounts with dashboards

#### ✅ Implement payout system for revenue sharing
