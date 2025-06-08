import React from 'react';
import Landing from './Landing.jsx';
import '../Styles/Landing.css'; // Optional if you want landing styles
import '../Styles/index.css';  // General site-wide styles

export default function LoginPage() {
  const scrollToLogin = () => {
    const section = document.getElementById('loginSection');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Landing onScrollDown={scrollToLogin} />
      
      <section id="loginSection" style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        {/* Your login form goes here */}
        <h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Login Form Placeholder</h2>
      </section>
    </div>
  );
}
// Note: The above code assumes you have a Landing component that handles the landing page.
// The login form is a placeholder and should be replaced with your actual login form implementation.