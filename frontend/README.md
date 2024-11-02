# Ecommerce App Frontend App (React + TypeScript + Vite)

A modern ecommerce frontend built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites
- Node.js (v18.20.3)
- npm (9.11.0)

## Features
⚡ SWC for fast compilation
🔄 React Query for server state management
🎨 Tailwind CSS for styling
📝 TypeScript for type safety
🛣️ React Router for navigation
🔧 Path aliases for clean imports
📡 Axios for API calls

## Initial Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd frontend
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types
- `npm test` - Run tests

## Project Structure

src/
├── assets/ # Static assets (images, fonts, etc.)
├── components/ # Reusable components
├── config/ # App configuration
├── hooks/ # Custom React hooks
├── layouts/ # Layout components
├── lib/ # Library configurations
├── pages/ # Page components
├── services/ # API services
├── store/ # State management
├── types/ # TypeScript type definitions
└── utils/ # Utility functions

## Tech Stack

- React 18
- TypeScript
- Vite
- React Query
- Tailwind CSS
- Axios
- React Router DOM