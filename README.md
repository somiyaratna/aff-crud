# 🛒 Admin Dashboard - Product Management

**By: Somiya Ratna Behera**

## Live Hosted Link (https://aff-crud.vercel.app/)

## 📋 Description

This is a simple Admin Dashboard web application built with **React.js**, **Redux Toolkit**, and **React Router**. It includes:

- A login system with public/private route protection.
- A dashboard page displaying sales stats and charts.
- A full product management system (CRUD).
- State persistence using **redux-persist**.
- Styled with **Tailwind CSS** for a clean, responsive UI.

---

## ⚙️ Setup Instructions

Follow these steps to run the application locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/somiyaratna/aff-crud.git
cd aff-crud
```

### 2. **Install Dependencies **

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 3. **Start the Development Server**

```bash
npm run dev
```

The app will run on http://localhost:5173

#### Login Credentials

A list of usernames and passwords can be found at (https://dummyjson.com/users).
If you want to get started as quickly as possible, you can use

##### username - emilys

##### password - emilyspass

### **Challenges**

- Managing data flow between all the Modals and products and their respective ids.
- Persisting the data, so we don't lose products after reloading the page.
- Chart.js implementation for Dashboard graph, although it is hard-coded static data.
