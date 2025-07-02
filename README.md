# MERN Auth & API Starter

A lean **full‑stack boilerplate** featuring a React client, Express.js REST API, and MongoDB persistent storage.  Perfect for quickly bootstrapping apps that need user authentication, protected routes, and a clean project structure.

> **Stack:** React 18 · Vite · TailwindCSS — Node 18 · Express 5 · MongoDB · Mongoose · JWT · dotenv

---

## ✨ Features

* **JWT Auth** – Sign‑up / sign‑in, hashed passwords (bcrypt), refresh‑token flow.
* **Role‑based access** – Route‑level middleware guards (`admin`, `user`, etc.).
* **Modular MVC** – Separate *controllers*, *models*, *routes*, *middlewares* for maintainability.
* **Client ↔ API proxy** – Dev server proxies API calls, avoiding CORS hassle.
* **ESLint + Prettier** – Consistent code style out of the box.
* **Concurrent dev** – One‑command hot‑reload for both client & server (`npm run dev`).

---

## 🗂️ Folder Structure

```text
├── client/            # React front‑end (Vite)          
│   ├── src/
│   └── vite.config.js
├── config/            # DB & app‑level configuration
├── controllers/       # Express route handlers
├── data/              # Seed data or JSON fixtures
├── helpers/           # Utility functions (e.g. token helpers)
├── middlewares/       # Auth, logging, error handler, etc.
├── models/            # Mongoose schemas & indexes
├── routes/            # Express routers (mounted in server.js)
├── server.js          # Entry point for the API
├── package.json       # Root scripts manage both client & server
└── .env.example       # Sample environment variables
```

---

## 🚀 Quick Start

1. **Clone & install**

   ```bash
   git clone https://github.com/<user>/<repo>.git
   cd <repo>
   npm install            # root installs backend deps & concurrently
   cd client && npm install   # front‑end deps
   ```
2. **Configure env vars**

   ```bash
   cp .env.example .env     # edit values
   # required
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern_auth
   JWT_SECRET=supersecret
   ```
3. **Run in dev mode** *(concurrently)*

   ```bash
   npm run dev    # spins up React at :5173 and API at :5000
   ```
4. **Build & serve client**

   ```bash
   npm run build      # vite build (in /client)
   npm run start      # node server.js (serves /dist statically)
   ```

---

## 🔑 API Overview

| Method | Endpoint             | Description                                         |
| ------ | -------------------- | --------------------------------------------------- |
| `POST` | `/api/auth/signup`   | Register new user – returns access + refresh tokens |
| `POST` | `/api/auth/login`    | Authenticate existing user                          |
| `GET`  | `/api/users/me`      | Get current user profile *(protected)*              |
| `POST` | `/api/token/refresh` | Issue new access token via refresh token            |

> Detailed Swagger docs coming soon – or explore quickly with Postman collection in `/data`.

---

## 🧪 Testing

```bash
# backend unit + integration (Jest + Supertest)
npm run test
```

Front‑end tests use **Vitest** + **React Testing Library**: `cd client && npm run test`.

---

## 📈 Roadmap

* [ ] Docker compose for one‑command spin‑up (node + mongo).
* [ ] CI workflow (GitHub Actions) with lint, test, and Netlify preview deploy.
* [ ] Email/password reset flow.
* [ ] Social login (Google OAuth).


