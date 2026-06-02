# 🎬 Movie Review App

A modern movie discovery and review application built with React JS, Tailwind CSS, and The Movie Database (TMDB) API. Users can browse popular movies, search for titles, filter by genre, view detailed movie information, and rate movies using a star-based rating system.

---

## 🚀 Live Demo

**Netlify:** https://movie-review-a.netlify.app

**GitHub Repository:** https://github.com/bxodelroy/Movie-Review-App

---

## 📌 Features

### 🎥 Movie Listings

* Fetches real-time movie data from TMDB API
* Displays movie posters, titles, release years, and ratings
* Responsive card-based layout

### 🔍 Search Functionality

* Search movies by title using TMDB Search API
* Dynamic results update as users type

### 🏷️ Genre Filtering

* Fetches genres directly from TMDB
* Filter movies by selected genre
* Works alongside search functionality

### 📄 Movie Details Page

* Detailed movie information
* Overview/description
* Release date
* Runtime
* Genre tags
* TMDB ratings

### ⭐ User Rating System

* Interactive 1–5 star rating
* Ratings stored using Local Storage
* Ratings persist between sessions

### 🎨 Responsive UI

* Mobile-friendly design
* Modern interface built with Tailwind CSS
* Hover animations and smooth user experience

### 🔄 Navigation Features

* Dynamic routing with React Router
* Back navigation support
* Scroll position preservation when returning from movie details

---

## 🛠️ Tech Stack

### Frontend

* React JS
* React Router DOM
* Tailwind CSS

### State Management

* React Hooks

  * useState
  * useEffect
  * useLayoutEffect

### API

* TMDB (The Movie Database) API

### Deployment

* Netlify

---

## 📂 Project Structure

```plaintext
src/
│
├── components/
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   ├── RatingStars.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   └── MovieDetails.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/bxodelroy/Movie-Review-App.git
```

### Navigate to Project

```bash
cd Movie-Review-App
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

### Start Development Server

```bash
npm run dev
```

---

## 🌐 TMDB API

This project uses data provided by:

https://www.themoviedb.org/

Developer Documentation:

https://developer.themoviedb.org/docs/getting-started

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Search Functionality
* Genre Filtering
* Movie Details Page
* Rating System

---

## 🎯 Learning Outcomes

This project demonstrates:

* API Integration
* React Hooks
* Component-Based Architecture
* Client-Side Routing
* State Management
* Local Storage Usage
* Responsive Web Design
* Dynamic Filtering & Searching
* Modern UI Development

---

## 👨‍💻 Author

Baibhab Roy

GitHub: https://github.com/bxodelroy

---

## 📄 License

This project is open source and available under the MIT License.
