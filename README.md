# Interactive Weather App

---

## Project Overview

**Weather Explorer** is an interactive, stylized web application that merges real-time weather data with a 3D spinning globe, comic-book UI, and user customization. It helps users visualize weather patterns, track forecasts, learn about meteorology, and interact with past climate data.

---

## Frontend Features 

- **Index Page**  
  - 3D globe that spins to selected city via search  
  - Search bar for `City, State, Country`  
  - Toggle button for switching between preferred languages
  - Long-click to choose specific language, short-click to rotate between selected languages
  - Log out button
  - Tabs to navigate to other pages

- **Profile Page**  
  - Language selection (multi-language: e.g., English, Spanish, French...)  
  - User settings stored in backend
  - User first and last name, username, date of account creation, delete account button with a confirm pop up
  - Log out button
  - Tabs to navigate to other pages

- **Learning Page**  
  - Visual guide to weather patterns (rain, snow, wind, heat, storms)  
  - Interactive cards and comic-style descriptions
  - Log out button
  - Tabs to navigate to other pages

- **Favorites Page**  
  - Save favorite cities  
  - Visualizations for weather trends (daily / monthly / yearly)  
  - Interactive charts and panels inspired by superhero stat sheets
  - Log out button
  - Tabs to navigate to other pages

- **Signup & Login Pages**  
  - Account creation and secure login  
  - Cookie-based or JWT authentication  
  - Smooth UI transitions, halftone effects, and SVG styling
  - Password rules for security
  - User input sanitation

---

## Backend Plans

- REST API for:
  - Weather fetch and historical data (OpenWeatherMap, Visual Crossing)
  - User registration, login, authentication (JWT or cookies)
  - Profile info (languages, favorites)
  - Secure input validation and data sanitization
- MongoDB or PostgreSQL to store user profiles and weather history
- Language preferences stored per user

---

## Design & Styling

| Element | Style |
|--------|-------|
| Fonts | `Poppins`, `Roboto`, comic-style (`Bangers`, `Comic Neue`) |
| Colors | Bold primaries, halftone overlays, electric shadows |
| Animations | `GSAP`, Three.js rotation, SVG comic transitions |
| UI Components | Comic speech bubbles, vintage data panels, punk textures |

**Loading Screen Concept**  
Animated outline of a cloud, sun, and lightning bolt pulsing in sync with loading progress.

**Color Scheme:**  
<p align="center">
  <img src="https://github.com/irllyliketoast/Interactive-Weather-App/blob/15140ad07e457c669dab4b4a5191707573efa366/Technical%20Documentation/ColorPalette.png" width="900" height ="300">
</p>

---

## Visualization Tools

- `Chart.js` or `D3.js` for graphs
- Weather icons and conditions styled like comic power-ups
- Favorites data shown like stat sheets: heat over time, wind spikes, rainfall trends

---

## Language Support

- Toggle languages with click
- Select specific languages with long-click
- Text content dynamically pulled from language dictionaries
- Future: use `i18next` or custom key-based JSON solution

---

## Tech Stack

**Frontend:**
`HTML`, `CSS`, `JavaScript`, `GSAP`, `Three.js`, `SVG`, `Chart.js`

**Backend:**
`Node.js`, `Express`, `MongoDB` *(planned)*

**APIs:**
`OpenWeatherMap`, `Visual Crossing` *(for historical data)*

---

## Dev Roles

* **Laura Estremera** – Scrum Master + Frontend
* **Tyler** – Frontend + Backend
* **Dylan** – Globe animations + Backend 

---

## Statement from the Developers

This project is for educational and creative use. All design elements referencing Spider-Punk are used for inspiration only.




---
