# Shipyard Restaurant 🍽️

A modern, minimal Next.js restaurant landing page with full Docker and CI/CD pipeline for AWS EC2 deployment.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production (Docker)

```bash
# Build and run with Docker Compose
docker-compose up

# Or build and run manually
docker build -t shipyard .
docker run -p 3000:3000 shipyard
```

---

## 🐳 Docker Setup

### Dockerfile

Multi-stage build for optimized production images:

| Stage | Purpose |
|-------|---------|
| `builder` | Installs dependencies and builds Next.js app |
| `runner` | Lightweight production runtime (~200MB) |

**Key features:**
- Uses `node:20-alpine` for minimal image size
- Separates build and runtime dependencies
- Copies only production artifacts (`.next`, `public`, `node_modules`)

### Docker Compose

```bash
docker-compose up        # Start container
docker-compose up -d     # Start in detached mode
docker-compose down      # Stop container
docker-compose build     # Rebuild image
```

**Configuration (`compose.yaml`):**
- Container name: `shipyard`
- Image: `saidubundukamara/shipyard:latest`
- Port mapping: `3000:3000`
- Auto-restart: `unless-stopped`
- Environment variables loaded from `.env`

---

## ⚙️ CI/CD Pipeline

### GitHub Actions Workflow

Automated deployment to AWS EC2 on every push to `main`.

**Pipeline stages:**

```
Push to main → Build Image → Push to Docker Hub → Deploy to EC2
```

### Required GitHub Secrets

Configure these in your repository settings (`Settings > Secrets > Actions`):

| Secret | Description |
|--------|-------------|
| `DOCKER_HUB_USERNAME` | Your Docker Hub username |
| `DOCKER_HUB_PASSWORD` | Docker Hub access token |
| `EC2_HOST` | EC2 instance public IP/hostname |
| `EC2_USERNAME` | SSH username (e.g., `ec2-user`, `ubuntu`) |
| `EC2_PRIVATE_KEY` | EC2 SSH private key (PEM format) |

### EC2 Prerequisites

Ensure your EC2 instance has:

1. **Docker installed:**
   ```bash
   sudo yum install docker -y  # Amazon Linux
   sudo apt install docker.io -y  # Ubuntu
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

2. **Security group** with port 3000 open (or configured reverse proxy)

3. **SSH access** from GitHub Actions (key-based auth)

---

## 📁 Project Structure

```
shipyard/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── app/
│   ├── globals.css         # Styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── public/                 # Static assets
├── compose.yaml            # Docker Compose config
├── Dockerfile              # Multi-stage build
├── .dockerignore           # Docker build exclusions
└── .env                    # Environment variables (not committed)
```

---

## 🔧 Environment Variables

Create a `.env` file for local development:

```env
NODE_ENV=production
# Add any additional env vars here
```

---

## 📚 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Runtime:** Node.js 20 Alpine
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Hosting:** AWS EC2

---

## 🚢 Deployment Commands

**Manual deployment to EC2:**

```bash
# SSH into EC2
ssh -i your-key.pem ec2-user@your-ec2-ip

# Pull and run latest image
docker pull saidubundukamara/shipyard:latest
docker stop shipyard || true
docker rm shipyard || true
docker run -d \
  --name shipyard \
  --restart unless-stopped \
  -p 3000:3000 \
  saidubundukamara/shipyard:latest
```

---

## 📝 License

© 2026 Shipyard Restaurant. All rights reserved.
