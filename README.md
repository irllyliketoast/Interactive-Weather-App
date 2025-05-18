# Interactive Weather App

## Initial Concept
- Interactive 3D globe functionality
- Real-time weather data
- Stylized UI inspired by Spider-Punk & Across the Spider-Verse
- Search for weather by `City, State, Country`

Built using **HTML, CSS, JavaScript**, and weather data from the **OpenWeatherMap API**, the frontend already supports:
- API-driven globe rotation to search result
- Comic book-style weather report overlays
- Responsive search handling with a flexible input format

---

## Frontend Functionality

| Feature | Description |
|--------|-------------|
| Globe Rendering | Rotating globe via `Three.js` or `Globe.gl` |
| User Input | Search bar accepts `City, State, Country` (supports multi-language in future) |
| Weather API | Integrated OpenWeatherMap with support for multiple weather types |
| Comic Styling | SVG overlays, halftone textures, bold comic palettes |
| Animations | Page transitions, weather pop-ups, globe motion via GSAP/Three.js |
| Input Suggestions | Auto-fill and fuzzy matching (future: `Fuse.js`) |

---

## Future Backend Plans

> *Once the frontend main page is complete, we plan to connect it to a lightweight Node/Express or Java backend.*

- [ ] User login and signup  
- [ ] Profile management  
- [ ] Custom language selection  
- [ ] Weather favorites and saved locations  
- [ ] Interactive data visualizations (e.g., [InformationIsBeautiful](https://informationisbeautiful.net/))  
- [ ] Cookie-based authentication  
- [ ] Secure input sanitization (preventing XSS/injection attacks)

---

## Design Vision

**Comic Theme:**  
- Loading screen: rotating outline of a **cloud**, **sun**, and **lightning bolt**
- Stylized location marker zoom-in on selected city  
- Weather report displayed in a **speech bubble** panel (like comic captions)

**Font Style:**  
- Mix of `Poppins`, `Roboto`, and comic-style fonts like `Bangers` or `Comic Neue`

**Color Scheme:**  


---

## Setup Instructions
