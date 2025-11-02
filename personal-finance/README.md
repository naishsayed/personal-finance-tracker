# 💰 Personal Finance Manager

A clean, modern, and beginner-friendly **Personal Finance Manager** web app built using **React + Vite + React Router**.  
Easily track your income and expenses, visualize totals in a live pie chart, and manage your personal budget — all within your browser using **localStorage** (no backend needed).

---

<div align="center">

[![React](https://img.shields.io/badge/React-17%2B-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-fast-yellow?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](#)

</div>

---

## 🧭 Overview

> “A simple yet powerful budget tracker for everyone.”

The **Personal Finance Manager** helps you record daily transactions, monitor your spending, and visualize your savings.  
Perfect for students, professionals, or anyone wanting to control their finances — all within the browser, with no signup or backend.

---

## 🗂️ Project Structure

```plaintext
personal-finance/
├── public/
│   └── favicon.ico              🌟 App icon
│
├── src/
│   ├── components/              🧩 Reusable React components
│   │   ├── Chart.jsx            📊 Displays income vs expense pie chart
│   │   ├── Header.jsx           🏷️ App header & title
│   │   ├── Summary.jsx          💰 Shows totals (income, expense, balance)
│   │   ├── TransactionForm.jsx  ✏️ Add new income/expense
│   │   └── TransactionList.jsx  📋 Displays transaction history
│   │
│   ├── App.jsx                  ⚙️ Main layout & app state logic
│   ├── index.jsx                🚀 Entry point (renders React root)
│   └── styles.css               🎨 Global styles (Poppins, layout, colors)
│
├── index.html                   🌐 Root HTML file (Vite entry)
├── Dockerfile                   🐳 Optional Docker setup for deployment
├── .dockerignore                🚫 Ignore unnecessary files in Docker
├── .gitignore                   🧹 Ignore unnecessary files in Git
├── vite.config.js               ⚡ Vite configuration
├── tsconfig.json                🔧 TypeScript config (auto-generated)
├── package.json                 📦 Dependencies and scripts
├── package-lock.json            🔒 Dependency lock file
└── README.md                    📝 Project documentation

> 💡 The structure is **optimized for clarity and simplicity** — great for beginners learning React, Vite, and basic file organization.

---

## ⭐ Features

✅ Add / remove transactions (with description & amount)  
✅ Real-time **Pie Chart** visualization using **Recharts**  
✅ Auto-calculated **Total Income**, **Total Expense**, and **Balance**  
✅ Responsive dashboard with a clean, modern layout  
✅ Saves data to **localStorage** (persistent even after refresh)  
✅ Optional **Dockerfile** for easy container deployment  

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React** | UI and state management |
| ⚡ **Vite** | Super-fast development server and build tool |
| 🔀 **React Router** | Routing and navigation |
| 📊 **Recharts** | Data visualization (Pie Charts) |
| 🎨 **CSS (Poppins font)** | Styling and layout |

---

## 🪜 Installation & Running the Project (Step-by-Step)

Follow these easy steps — even if you’re new to React or Vite! 👇

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/naishsayed/personal-finance-tracker.git
cd personal-finance-tracker

### 2️⃣ Install Dependencies

Make sure you have **Node.js (v16+)** installed.  
Then, install project dependencies:

```bash
npm install

---

### 3️⃣ Run the Project Locally

Start the development server with:

```bash
npm run dev

### 3️⃣ Run the Project Locally

Start the development server with:

bash
npm run dev


You’ll see output like:


VITE v5.x  ready in 300ms
➜  Local:   http://localhost:5173/


Open your browser at 👉 [http://localhost:5173](http://localhost:5173) 🎉

---

### 4️⃣ Build for Production (Optional)

To create an optimized production build:

bash
npm run build


Preview the build locally:

bash
npm run preview


---

### 5️⃣ Run with Docker (Optional)

If you have Docker installed:

bash
docker build -t personal-finance-app .
docker run -p 3000:3000 personal-finance-app


Then visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Example Screenshot

| Dashboard View | Pie Chart View |
|----------------|----------------|
| ![Dashboard Screenshot](https://via.placeholder.com/400x250.png?text=Dashboard+View) | ![Pie Chart Screenshot](https://via.placeholder.com/400x250.png?text=Pie+Chart+View) |

🖼️ Replace the above placeholders with your actual project screenshots.

---

## 📘 License

This project is licensed under the *MIT License* — free to use, modify, and distribute.

---

## ❤️ Acknowledgements

Built with ❤️ by *Naish Sayed*  
Special thanks to the open-source community for *React, **Vite, and **Recharts*.  

Perfect for *students, **beginners, and **portfolio projects*.

---

> ✨ “Track your spending. Grow your savings. Own your future.” 💸