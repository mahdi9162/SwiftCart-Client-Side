# SwiftCart — Next.js (App Router) Catalog Store

SwiftCart is a clean, modern catalog experience for a **clothing-style store**.
Users can browse items quickly, open product details instantly, and (optionally) add new items using a **simple cookie-based mock login**.

---

## Tech Stack

- **Next.js 15/16 (App Router)**
- **Tailwind CSS**
- **Express.js REST API / JSON** (server)
- **Cookie-based mock authentication** (hardcoded demo credentials)

---

## Repositories

- **Client:** https://github.com/mahdi9162/SwiftCart-Client-Side.git
- **Server:** https://github.com/mahdi9162/SwiftCart-Server-Side.git

---

## Pages & Routes (App Router)

### Public Pages

- `/` → Landing page (Navbar + Footer + 7 sections)
- `/items/lists` → Items list page (fetches items from API)
- `/items/[id]` → Item details page (fetches single item by id)
- `/login` → Mock login page

### Protected Page (Cookie Auth)

- `/add-item` → Add item form (requires login)

> **Auth rule:** If cookies are missing/invalid, protected routes redirect users to `/login`.

---

## Landing Page Sections (7 Total)

✅ Navbar + Footer included (not counted in 7)

1. Hero
2. Categories
3. How It Works
4. Trending
5. Features
6. About
7. FAQ

---

## Implemented Features

### Items List Page (`/items/lists`)

- Publicly accessible
- Fetches product list from Express API
- Each card shows:
  - Name, price, category
  - Stock status
  - Image
  - “View Details” link → `/items/[id]`

### Item Details Page (`/items/[id]`)

- Publicly accessible
- Fetches a single item by `id`
- Displays:
  - Title, price, category
  - Stock status
  - Full description
  - Product image

### Mock Authentication (Cookies)

- Login uses **hardcoded demo email/password**
- On successful login:
  - Stores auth info in cookies
  - Redirects to `/items/lists`
- Logout:
  - Clears cookies
  - Updates UI state accordingly

### Add Item (`/add-item`) — Protected

- Only accessible after login
- Form to add a new product
- Sends product data to Express server and stores it in DB

### Extra Enhancements

- Toast notifications (success/error)
- Loading UI for data-fetching pages
- Consistent UI sections for assignment presentation

---

## API (Demo)

**Base URL (demo):**

- `https://swiftcart26.vercel.app`

### Endpoints

- `GET /items` → get all items
- `GET /items/:id` → get item details by id
- `POST /items` → add a new item (used by Add Item page)

---

## Demo Login Credentials

- Email: `demo@swiftcart.com`
- Password: `123456`

---

## Setup & Installation

### 1) Run Server (Demo)

```bash
git clone https://github.com/mahdi9162/SwiftCart-Server-Side.git
cd SwiftCart-Server-Side
npm install
npm run dev
```

## Server :

```
https://swift-cart-server-side.vercel.app
```

## Run Client

```
git clone https://github.com/mahdi9162/SwiftCart-Client-Side.git
cd SwiftCart-Client-Side
npm install
npm run dev
```

## Client :

```
https://swiftcart26.vercel.app
```

## Project Structure (Client)

```
src/app/
  page.js                → Landing Page
  login/page.jsx
  add-item/page.jsx
  items/lists/page.jsx
  items/[id]/page.jsx

src/components/home/
  Hero.jsx
  Categories.jsx
  HowItWorks.jsx
  Trending.jsx
  Features.jsx
  AboutUs.jsx
  FAQ.jsx

src/components/shared/
  Navbar.jsx
  Footer.jsx
```

### Note

- This project uses cookie-based mock auth (no Firebase/NextAuth).
- Designed for assignment requirements: public pages, protected page, CRUD via Express API, and clear UI sections.
