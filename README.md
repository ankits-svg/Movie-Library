# 🎬 Movie Library

A React-based web application to **browse movies**, search by title, and manage a personal **watchlist**. Users can view movie details, add movies to a watchlist, and have their data persist across sessions using **localStorage**.

---

## 🔗 Live Demo

<a href="https://candid-torte-f38fc7.netlify.app/" target="_blank" rel="noopener noreferrer">
  Deployed Netlify link here
</a>


---

## 🛠 Features

- Browse popular movies on page load.  
- Search movies by title.  
- View detailed movie information: title, poster, year, genre, plot, actors, language.  
- Add movies to a personal **Watchlist**.  
- Remove movies from the watchlist.  
- Watchlist data persists in **localStorage**.  
- Responsive design with clean, pixel-perfect movie cards.  
- Client-side routing using React Router.  

---

## 💻 Tech Stack

- React 18 (with Vite)  
- React Router  
- Context API for global state management  
- CSS Modules for scoped styling  
- OMDb API for movie data  

---

## ⚙️ Getting Started

### **1. Clone the repository**

```bash
git clone https://github.com/yourusername/movie-library.git
cd movie-library

```
### **2. Install dependencies**

```bash
npm install
# or
yarn install

```
### **3. Run the app locally**

```bash
npm run dev
# or
yarn dev

```
- Open your browser at http://localhost:5173 (or the port Vite displays).

## Running Tests
- No automated tests implemented yet.
To manually test:

- Search for a movie in the search bar.
- Click a movie card to view details.
- Add it to your watchlist.

Navigate to the Watchlist page and verify persistence.


## Assumptions & Design Choices

- Vite used for fast development and better performance.
- Context API chosen over Redux for simplicity in managing watchlist state.
- CSS Modules used to prevent global style conflicts.
- Debounced search input to reduce API calls and improve performance.
- Unique omdbID used as key for rendering movie cards to prevent duplicates.
- Responsive grid layout to show 4 cards per row on desktop.

## Folder Structure
```bash
movie-library/
│
├─ public/
├─ src/
│   ├─ assets/
│   ├─ components/
│   ├─ context/
│   ├─ pages/
│   ├─ App.jsx
│   └─ index.jsx
├─ .env
├─ package.json
└─ vite.config.js
```
