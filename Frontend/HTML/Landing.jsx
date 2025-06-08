import React from 'react';
import ASCIIText from './ASCIIText'; // <-- assuming this is in your components folder
import './Landing.css'; // optional external styling

export default function LandingPage({ onScrollDown }) {
  return (
    <section id="landing" className="landing-container">
      <ASCIIText
        text="Welcome to GraphicCast"
        asciiFontSize={8}
        textFontSize={180}
        textColor="#fdf9f3"
        planeBaseHeight={10}
        enableWaves={true}
      />

      <button className="scroll-arrow" onClick={onScrollDown}>
        ↓
      </button>
    </section>
  );
}
