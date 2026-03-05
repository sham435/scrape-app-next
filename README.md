# Web Scraper - Next.js + NestJS

A full-stack web scraping application built with Next.js 16, React 19, TypeScript 5.9, Tailwind CSS v4, and NestJS 15.

## Tech Stack

### Frontend
- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5.9**
- **Tailwind CSS v4**
- **ESLint 9** (Flat Config)

### Backend
- **NestJS 15** (Latest)
- **TypeScript**
- **Health Checks** (@nestjs/terminus)
- **Config Management** (@nestjs/config)

## Prerequisites

- Node.js 18+
- npm

## Getting Started

### 1. Install Dependencies

```bash
npm install
cd backend && npm install && cd ..
```

### 2. Environment Setup

Create `.env` files:

```bash
# Backend (.env)
PORT=3001
NEXT_API_URL=http://localhost:3000
```

### 3. Run Development Servers

```bash
# Run both Next.js and NestJS
npm run dev

# Or run separately:
npm run dev:next    # Next.js on http://localhost:3000
npm run dev:nest    # NestJS on http://localhost:3001
```

### 4. Build for Production

```bash
npm run build:all
```

## API Endpoints

### Health Checks (NestJS)
| Endpoint | Description |
|----------|-------------|
| `GET /health` | Full health check |
| `GET /health/live` | Liveness probe |
| `GET /health/ready` | Readiness probe |

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev servers |
| `npm run build` | Build Next.js |
| `npm run build:nest` | Build NestJS |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript check |

## Deployment

### Railway

Deploy to Railway using the button below:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.com/new/template/yDom4a)

Or use CLI:

```bash
npm i -g @railway/cli
railway login
railway init
railway deploy
```

### Docker

```bash
docker build -t scrape-app .
docker run -p 3000:3000 scrape-app
```

## License

MIT
