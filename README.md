# AMRR Item Management Assignment

A minimal, clean Next.js app to manage items for AMRR TechSols Pvt Ltd internship assignment.

## Features

- **Add Item**: Add a new item with name, type, description, cover image, and additional images.
- **View Items**: See all items (static + user-added) in a responsive grid.
- **Item Details**: Click any item to view all details and images in a modal with a simple carousel.
- **Enquire**: Button in modal shows a success toast (mock action).
- **Persistent**: Items are saved in localStorage.
- **Minimal UI**: Built with Shadcn UI and Tailwind CSS, minimal custom styling.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory (pages: Home, Add Item, View Items)
- `components/` - UI and modal components (Shadcn-based)
- `contexts/ItemContext.tsx` - React context for item state
- `types/item.ts` - TypeScript types for items
- `lib/utils.ts` - Utility for class name merging

## Notes

- No backend/API: All data is in localStorage for demo purposes.
- No bonus features (API/email) implemented as per instructions.
- UI is intentionally minimal and human-readable.

---

**Submission for AMRR TechSols Pvt Ltd Internship Assignment**
