// sulaiman_roots_portfolio/src/App.js
import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "Sulaiman Roots";
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Sulaiman Roots</h1>
        <p>Your portfolio, your roots.</p>
      </header>
      <main className="main-content" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery">
          <img src="https://i.pinimg.com/736x/0a/9f/e1/0a9fe122bc5b6b2ce1f9184da9894f89.jpg" alt="Placeholder 1" />
          <img src="https://i.pinimg.com/736x/e2/12/03/e21203ed42f32a2316e2d6d6658163f6.jpg" alt="Placeholder 2" />
          <img src="https://i.pinimg.com/736x/ad/42/d2/ad42d2056ef5d2f71b0d1bc4a1fe491f.jpg" alt="Placeholder 3" />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Sulaiman Roots. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;