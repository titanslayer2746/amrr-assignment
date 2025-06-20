# AMRR Item Management

A modern web application for managing inventory items with a clean, responsive interface built with Next.js and React.

## Features

- **Add Items**: Create new items with name, type, description, and multiple images
- **View Items**: Browse your item collection in a grid layout
- **Item Details**: Click on items to view detailed information with image carousel
- **Local Storage**: Data persists in browser localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd amrr-assignment
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
amrr-assignment/
├── app/                    # Next.js app router pages
│   ├── add-item/          # Add new item form
│   ├── view-items/        # Browse items grid
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── contexts/              # React context providers
├── types/                 # TypeScript type definitions
└── lib/                   # Utility functions
```

## Usage

1. **Home Page**: Navigate between adding items and viewing your collection
2. **Add Item**: Fill out the form with item details and image URLs
3. **View Items**: Browse your items in a responsive grid layout
4. **Item Details**: Click any item to see full details with image carousel

## Data Persistence

Items are stored in browser localStorage and persist between sessions. The app includes sample data for demonstration purposes.
