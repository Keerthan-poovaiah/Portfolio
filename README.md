# Keerthan Poovaiah — MERN Portfolio

Personal portfolio built with the MERN stack to showcase backend and full-stack development skills.

**Live:** [keerthan-poovaiah.github.io](https://keerthan-poovaiah.github.io) *(update after deploy)*

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite, Framer Motion, CSS Modules |
| Backend | Node.js, Express.js, REST API |
| Database | MongoDB (contact form messages) |
| Deployment | Render (backend) + Vercel (frontend) |

## Project Structure

```
keerthan-portfolio/
├── client/          # React + Vite frontend
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Page-level components
│       ├── hooks/        # Custom React hooks
│       └── utils/        # Helper functions & data
├── server/          # Node.js + Express backend
│   ├── routes/      # API route definitions
│   ├── controllers/ # Route handler logic
│   ├── middleware/  # Custom middleware
│   └── config/      # DB & app config
└── package.json     # Root with concurrently scripts
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas URI)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/keerthan-poovaiah/portfolio.git
cd portfolio

# Install all dependencies
npm run install:all

# Add environment variables
cp server/.env.example server/.env
# Fill in your MONGO_URI and other vars

# Run both client + server in dev mode
npm run dev
```

Frontend runs on `http://localhost:5173`  
Backend runs on `http://localhost:5000`

## Deployment

### Backend → Render
1. Connect your GitHub repo on [render.com](https://render.com)
2. Set root directory to `server`
3. Build command: `npm install`
4. Start command: `npm start`
5. Add env vars from `.env.example`

### Frontend → Vercel
1. Connect your GitHub repo on [vercel.com](https://vercel.com)
2. Set root directory to `client`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add `VITE_API_URL` pointing to your Render backend URL

---

Built by **Keerthan Poovaiah M M** · [keerthan11poovaiah@gmail.com](mailto:keerthan11poovaiah@gmail.com)
