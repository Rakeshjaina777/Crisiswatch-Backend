# Crisiswatch-Backend

A production-grade, scalable backend built with **Node.js + Express**, powered by **PostgreSQL (via Prisma)**, supporting **real-time alerts**, **social media ingestion**, **geo-mapping**, and **rate-limited APIs** for disaster tracking and response coordination.

> Built for coordination platforms where **timely information**, **geolocation awareness**, and **crowdsourced updates** are critical.

---

## 🚀 Features

✅ RESTful API using Express  
✅ PostgreSQL with Prisma ORM (relations, indexing, seeding)  
✅ Supabase SDK integration (e.g., storage, backup)  
✅ WebSocket notifications (Socket.IO)  
✅ Rate limiting to prevent abuse  
✅ Real-time social media ingestion (Twitter/Reddit mock data)  
✅ DTO-based input validation using Zod  
✅ Centralized error handling and logging (Winston or Pino)  
✅ Docker + Docker Compose support  
✅ Swagger auto-generated API docs  
✅ Scalable and modular folder structure

---

## 📦 Tech Stack

| Tool           | Purpose                             |
|----------------|-------------------------------------|
| **Express.js** | REST API framework                  |
| **Prisma ORM** | Database access with type safety    |
| **PostgreSQL** | Main relational database            |
| **Socket.IO**  | Real-time communication             |
| **Swagger**    | API documentation                   |
| **Docker**     | Containerized deployment            |
| **Zod**        | DTO validation for requests         |
| **Supabase**   | External API integration            |

---

## 📁 Folder Structure

```

disaster-backend/
├── prisma/                # Prisma schema, migrations, seed
├── src/
│   ├── config/            # .env, db, supabase, socket setup
│   ├── controllers/       # REST route handlers
│   ├── services/          # Business logic layer
│   ├── routes/            # API routing
│   ├── middlewares/       # Logging, validation, errors, rate limiting
│   ├── guards/            # Auth + Role guards
│   ├── dtos/              # Zod request validation
│   ├── utils/             # Gemini, maps, cheerio, keywords, logger
│   ├── constants/         # Role constants
│   ├── docs/              # Swagger config
│   └── app.js             # Express app entry
├── public/                # Uploads folder (optional)
├── client/                # HTML-based minimal test frontend
├── .env                   # Environment config
├── Dockerfile             # Docker build
├── docker-compose.yml     # PostgreSQL + backend container
├── index.js               # Entry point
└── README.md              # You're here!

````

---

## 🛠 Environment Setup

Create a `.env` file:

```env
PORT=8080
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/disaster_db"
````

---

## 🧪 Run Locally

```bash
npm install
npx prisma migrate dev --name init
node prisma/seed.js
npm run start:dev
```

Browse:

* API base: `http://localhost:8080/api`
* Swagger: `http://localhost:8080/api-docs`

---

## 🐳 Run via Docker

> Requires Docker installed and running.

```bash
docker-compose build
docker-compose up
```

---

## 📖 API Docs (Swagger)

Visit: `http://localhost:8080/api-docs`

Includes:

* Input/Output schemas
* Sample requests
* Authentication + rate limits
* Response structure and examples

---

## 📌 Example API Usage

### POST /api/disasters

```json
{
  "title": "Bridge Collapse",
  "description": "Major accident in downtown",
  "lat": 28.6139,
  "lng": 77.2090
}
```

### POST /api/social/ingest

```json
{
  "platform": "twitter",
  "keyword": "flood"
}
```

### WebSocket

> Emits `new-disaster` to all clients when a new disaster is reported.

---

## 🧠 Built With Best Practices

* 🧩 SOLID and modular structure
* 📜 Swagger auto-generation
* 🧰 Prisma indexing + migration
* 🧱 Middleware for error, logger, rate limit
* 📦 Docker-ready deployment
* 🚀 Designed for scalability

---



## 📌 Coming Soon

* Admin/Staff Roles and Auth (JWT)
* Disaster Reports & Volunteer Activity
* AI-based Gemini classification
* Reverse-geocoding with Google Maps API
* Crisis analytics dashboard

---

