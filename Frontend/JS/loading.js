// =======================================
// SVG Weather Symbol Loader (GraphicCast)
// =======================================
// This script animates SVG weather icons (cloud, sun, lightning)
// one at a time using stroke-dasharray tracing. Once all three
// icons are shown, the page automatically redirects to index.html.

// Select the container where SVG symbols will appear
const svgContainer = document.getElementById("svg-container");

// Define the sequence of weather symbols to animate
const SYMBOLS = [
  getCloudSVG(),
  getSunSVG(),
  getLightningSVG()
];

// Track which symbol is currently active
let current = 0;

// Sequentially shows each symbol, one at a time
function showNextSymbol() {
  // Clear the previous symbol
  svgContainer.innerHTML = "";

  // After the last symbol, redirect to the homepage
  if (current >= SYMBOLS.length) {
    window.location.href = "index.html";
    return;
  }

  // Add the current symbol's SVG to the page
  const svg = SYMBOLS[current];
  svgContainer.appendChild(svg);

  // Start the trace animation
  const path = svg.querySelector(".path");
  path.classList.add("path");

  // Wait for animation to complete, then show the next symbol
  setTimeout(() => {
    current++;
    showNextSymbol();
  }, 2500); // 3.5s animation + short pause
}

// Trigger the animation sequence when the page loads
window.onload = showNextSymbol;

// ==============================
// SVG SYMBOL GENERATOR FUNCTIONS
// ==============================

// Returns an SVG element representing a stylized cartoon cloud
function getCloudSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");

  svg.innerHTML = `
    <path class="path" d="
      M50 120 
      Q40 100 60 90 
      Q60 70 85 70 
      Q95 50 115 65 
      Q130 55 145 75 
      Q160 75 160 95 
      Q175 100 170 120 
      Q160 135 140 130 
      H65 Q55 130 50 120 Z
    "/>
  `;
  return svg;
}

// Returns an SVG element representing a sun with rays in 8 directions
function getSunSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");

  svg.innerHTML = `
    <circle class="path" cx="100" cy="100" r="30"/>
    <line class="path" x1="100" y1="40" x2="100" y2="20"/>
    <line class="path" x1="100" y1="160" x2="100" y2="180"/>
    <line class="path" x1="40" y1="100" x2="20" y2="100"/>
    <line class="path" x1="160" y1="100" x2="180" y2="100"/>
    <line class="path" x1="140" y1="60" x2="155" y2="45"/>
    <line class="path" x1="60" y1="60" x2="45" y2="45"/>
    <line class="path" x1="60" y1="140" x2="45" y2="155"/>
    <line class="path" x1="140" y1="140" x2="155" y2="155"/>
  `;
  return svg;
}

// Returns an SVG element representing a zigzag lightning bolt
function getLightningSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");

  svg.innerHTML = `
    <path class="path" d="
      M100 20          
      L70 90           
      L95 90           
      L65 160          
      L130 85          
      L105 85          
      Z                
    "/>
  `;
  return svg;
}
