# Vibrant Shop Spark ⚡️🛍️

Welcome to **Vibrant Shop Spark**! A modern, vibrant e-commerce application built with React, Vite, and Tailwind CSS. 

This project aims to provide a fast, responsive, and beautiful shopping experience with seamless state management.

## 🚀 Features

- **Modern UI/UX:** Styled using Tailwind CSS and `shadcn-ui` components for a premium look and feel.
- **Product Catalog:** Browse products across various categories like Gaming, Accessories, and more.
- **Shopping Cart:** Add, remove, and adjust quantities of products effortlessly.
- **Persistent Storage:** The shopping cart is powered by the Context API and synced with `localStorage`, meaning your items stay in the cart even if you refresh the page!
- **Notifications:** Informative toast notifications when adding/removing items from your cart (including quick "Go to Cart" action buttons).
- **Responsive Design:** Optimized for all device sizes.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS & shadcn-ui
- **State Management:** React Context API + Local Storage
- **Data Fetching:** TanStack Query (React Query)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anas-204/vibrant-shop-spark.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd vibrant-shop-spark
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Visit `http://localhost:5173` in your browser.

## 📂 Project Structure

- `src/components`: Reusable UI components (buttons, headers, product cards, etc.)
- `src/pages`: Main application pages (Home, Products, Cart, Checkout, etc.)
- `src/context`: React Context providers (like `CartContext.tsx` for state management)
- `src/data`: Static mock data for products
- `src/hooks`: Custom React hooks (like the toast hook)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
