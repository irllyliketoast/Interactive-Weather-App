# Interactive Weather App --> GraphicCast

---

## Project Overview

**GraphicCast** is an immersive, interactive weather application designed to engage users of all ages—especially students and curious learners—through stylized visuals, real-time data, and modular educational content. The platform blends educational value with comic-inspired aesthetics to make meteorology both accessible and exciting.

---

## Frontend Architecture

### Frontend File Structure (Proposed)

```
/frontend
├── /assets
│ ├── /icons
│ ├── /images
│ └── /videos
├── /components
│ ├── Globe.js
│ ├── Navbar.js
│ ├── LanguageToggle.js
│ └── WeatherCard.js
├── /pages
│ ├── LandingPage.html
│ ├── HomePage.html
│ ├── LoginPage.html
│ ├── SignupPage.html
│ ├── IndexPage.html
│ ├── DataViz.html
│ ├── Profile.html
│ ├── Settings.html
│ └── LearnModules.html
├── /styles
│ └── main.css
├── /scripts
│ └── app.js
└── index.html
```


### Landing Experience

Upon opening the website, users are greeted by a stylized landing page featuring a bold ASCII-text message:
**“Welcome to GraphicCast!”**
Beneath this, a small white-outlined circular button with a downward arrow invites interaction. Clicking the button smoothly transitions the user into the main homepage.


### Homepage Navigation

The homepage features a floating menu with three primary options:

* **Our Website** – Introduces the platform’s mission, educational goals, and design philosophy.
* **The Developers** – Displays profile cards with brief bios for each team member, accompanied by contact buttons linking to LinkedIn profiles or email.
* **Get Started** – Leads directly to the login page.



### Authentication Flow

* **Login Page:**
  Includes a prompt: *“Don’t have an account? Sign up”*—which redirects to the signup form.

* **Signup Page:**
  Fields include first name, last name, username, email, password, and confirm password.
  Passwords must meet security criteria:

  * Minimum of 8 characters
  * At least one uppercase and one lowercase letter
  * One number
  * One special character

  Extra security considerations:
  * Cookie-based or JWT authentication  
  * User input sanitation

  Upon successful registration, users are redirected to the login page.

* **On First Login:**
  A stepper (intro guide) walks new users through app features before taking them to the **Index Page**.

* **On Return Visits:**
  Users are directed straight to the Index Page.
  Proper session management ensures that logging out disables the back-button from re-entering the platform without authentication.



### Index Page

The core interface includes:

* A **3D rotating globe**
* A **search bar** to find locations by city, state, and/or country
* A **side panel** that appears upon selecting a location:

  * Displays weather data
  * Allows users to star/save the location as a favorite

At the bottom is a persistent **navigation dock** linking to:

* **Index**
* **Data Visualization**
* **Modular Learning**
* **Profile**
* **Settings**
* **Log Out** (returns to the landing page with secure session termination)



### Data Visualization

This page dynamically populates if the user has favorited at least one location.

* Weather trends are displayed using **Three.js** or similar animated data visualizations.
* Graphs include daily, monthly, and yearly stats for temperature, wind, precipitation, and more.

If no favorites exist, the page remains blank with a prompt to explore and add locations from the Index Page.



### Profile Page

Displays:

* Full name
* Username
* Email
* Date of account creation
* A selection of themed **weather pattern images** for setting a custom profile picture



### Settings Page

Offers:

* Language customization (multi-language support)
* A persistent **language toggle button** on all post-login pages for quick switching
* A **“Delete My Account”** button that permanently removes user data from the database



### Modular Learning

An educational section designed for engagement and knowledge retention. Features include:

* A **daily rotating weather fun fact**
* A **grid of \~30 interactive cards**, each representing a weather module

Upon clicking a module:

* A **modal window** appears with:

  * Educational content (text or video)
  * A short **quiz** on the material

After submitting:

* The user receives a grade and answer feedback
* They can choose to **reset the module** or **save their score**

Modules are non-linear—users can explore in any order, promoting autonomy and curiosity-driven learning.

 

---

## Backend Architecture Overview (Java + Spring Boot)

GraphicCast's backend will support:
* Secure user authentication
* Language and profile settings
* Weather data retrieval and storage
* Favorites and user history
* Quiz tracking and module progress
* Clean REST APIs for frontend interaction


### Core Structure

```
com.graphiccast
├── controller       // API endpoints
├── model            // Data classes (entities)
├── repository       // Interfaces for DB access
├── service          // Business logic
├── dto              // Data Transfer Objects
├── config           // Security and web config
└── GraphicCastApp   // Main class
```

### Models
1. User
2. Favorite
3. Quiz Record
4. Module

### Controllers
These expose REST endpoints.

#### AuthController handles:

POST /signup
POST /login
GET /logout
JWT issuing and validation

#### UserController handles:

GET /user/me
PUT /user/settings
DELETE /user/delete

#### WeatherController handles: 

GET /weather/current?lat=..&lon=..
GET /weather/history?locationId=..

#### FavoritesController handles:

POST /favorites
GET /favorites
DELETE /favorites/{id}

#### ModuleController handles:

GET /modules
GET /modules/{id}
POST /modules/{id}/submit-quiz

### Services
Each controller delegates logic to a matching service class. Examples:

* UserService: Registration, login, password hashing, JWT creation
* WeatherService: Calls external APIs (OpenWeatherMap, Visual Crossing)
* FavoriteService: Adds/removes favorites
* QuizService: Grades and stores quiz scores
* ModuleService: Loads content and tracks progress

### Security Plan
* Spring Security + JWT for stateless auth
* Passwords hashed with BCrypt
* Role-based access (admin vs. user if needed)
* CSRF protection disabled for APIs but handled securely via JWT tokens in Authorization headers
* Prevent back-navigation after logout using @RequestHeader checks + token invalidation logic

### Database: (? - not yet finalized) 
* PostgreSQL if we want strict schemas and relations (e.g., user-to-favorites foreign key)
* MongoDB if we want flexible structures (e.g., modules with embedded quiz arrays)

---

## Design & Styling

| Element | Style |
|--------|-------|
| Fonts | `Poppins`, `Roboto`, comic-style (`Bangers`, `Comic Neue`) |
| Colors | Bold primaries, halftone overlays, electric shadows |
| Animations | `GSAP`, Three.js rotation, SVG comic transitions |
| UI Components | Comic speech bubbles, vintage data panels, punk textures |


### Color Scheme:
<p align="center">
  <img src="https://github.com/irllyliketoast/Interactive-Weather-App/blob/15140ad07e457c669dab4b4a5191707573efa366/Technical%20Documentation/ColorPalette.png" width="900" height ="300">
</p>

---

## Visualization Tools (? - not yet finalized)

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
`Node.js`, `Express`, `MongoDB` (? - not yet finalized)

**APIs:**
`OpenWeatherMap`, `Visual Crossing` (for historical data)

---

## Primary Dev Roles

* **Laura Estremera** – Scrum Master + Frontend Lead
* **Tyler** – Backend Lead
* **Dylan** – Animation Lead

---

## Statement from the Developers

This project is for educational and creative use. 

---
