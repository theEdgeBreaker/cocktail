import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="navbar-logo-line1">
            <div className="navbar-logo-text">
              S <span className="navbar-logo-middle-letter">&</span> S
            </div>
            <div className="navbar-logo-img">🍸</div>
          </div>
          <div className="navbar-logo-line2">sip & savour</div>
        </div>
        <div className="navbar-elements">
          <div>Home</div>
          <div>Menu</div>
          <div>Reviews</div>
          <div>Faq</div>
          <div>Contact Us</div>
        </div>
      </nav>
      <main className="main">
        <h1 className="main-heading">Enjoy The Experience</h1>
        <div className="main-text">
          Lorem ipsum dolor sit amet, consectetur alaquip nora dey arisis
          adipiscing elit, sed do eiusmod ut labore et doa. Ut enim ad minim
          veniam, quis nostrud laboris nisi ut aliquip ex ea commodo consequat.
          consectetur adipiscing elit
        </div>
        <button className="main-btn">Menu</button>
      </main>
    </div>
  );
}

export default Home;
