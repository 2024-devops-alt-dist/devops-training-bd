## Full Stack Docker Application

### Table of Contents

- [Full Stack Docker Application](#full-stack-docker-application)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
  - [Technical Details](#technical-details)
    - [Server Side](#server-side)
    - [Client Side](#client-side)
  - [Setup Instructions](#setup-instructions)
  - [Running the Application](#running-the-application)
  - [Features](#features)
  - [Troubleshooting](#troubleshooting)

### Project Overview

This project demonstrates a modern full-stack application built with Docker containers. It features:

- TypeScript for type safety
- Express.js server with REST endpoints
- React frontend with routing
- Axios for HTTP requests
- Docker containerization

### Prerequisites

Before starting, ensure you have:

- Docker Desktop installed
- WSL enabled (for Windows users)
- Node.js (for development)
- npm or yarn package manager

### Project Structure

```
TP-Docker-app-fullstack/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── docker-compose.yml
```

### Technical Details

#### Server Side

The server implements two REST endpoints:

- `GET /server/time`: Returns current server time
- `GET /hello/:name`: Returns personalized greeting message

#### Client Side

The React application features:

- Home page with username form
- Dynamic time display page
- Axios integration for API calls
- TypeScript for type safety

### Setup Instructions

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   ```

2. **Navigate to project directory**

   ```sh
   cd TP-Docker-app-fullstack
   ```

3. **Build and start containers**
   ```sh
   docker-compose up --build
   ```

### Running the Application

Access the application at:

- Frontend: [http://localhost:1992](http://localhost:1992)
- Backend API: [http://localhost:2023](http://localhost:2023)

### Features

- Full TypeScript support
- Containerized development environment
- Automatic hot reloading
- Error handling with try/catch
- RESTful API endpoints
- Modern React routing

### Troubleshooting

**Common Issues and Solutions:**

- **Containers Won't Start**

  - Verify Docker Desktop is running
  - Check WSL status (Windows users)
  - Ensure ports 1992 and 2023 are available

- **API Calls Failing**

  - Confirm server container is running
  - Check `docker-compose.yml` port mappings
  - Verify axios base URL configuration

- **Hot Reload Not Working**
  - Check volume mounts in `docker-compose.yml`
  - Verify devDependencies installation
  - Restart containers with `docker-compose restart`
