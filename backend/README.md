# Ecommerce App Backend API

## Getting Started

### Prerequisites
- Node.js (v18.20.3)
- npm (9.11.0)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker, but recommended to use Docker)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up database secrets:
   Create a `db_secrets` directory in the project root and add the following files:
   - `db_secrets/name.txt`: Database name
   - `db_secrets/user.txt`: Database username
   - `db_secrets/password.txt`: Database password

   These files should contain only the raw text values without any quotes or additional formatting.

4. Start the development environment:
   ```bash
   docker compose up -d --build    # Starts the database and server in detached mode
   npm run dev            # Starts the development server
   ```

### Scripts

- `npm run dev`: Starts the development server with hot-reload
- `npm start`: Runs the production server
- `npm run build`: Builds the application for production
- `npm test`: Runs the test suite
- `npm run lint`: Checks code for linting errors
- `npm run format`: Formats the code using `prettier`

### Pre-commit Hooks

- `format`: Runs `prettier` to format the code.

## Tech Stack

- Node.js (v18.20.3)
- npm (9.11.0)
- Prisma (v5.19.1)
- PostgreSQL (v16.1)
- Express (v4.19.2)  

## API documentation

under development

## Error Handling

under development
