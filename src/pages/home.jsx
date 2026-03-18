import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      
      {/* HEADER */}
      <div className="home-header">
        <h2 className="logo">morago</h2>
        <div className="profile-icon"></div>
      </div>

      {/* BALANCE CARD */}
      <div className="balance-card">
        <div className="balance-top">
          <span>My balance</span>
          <span className="top-up">Top up</span>
        </div>

        <div className="balance-amount">
          50,000
        </div>
      </div>

      {/* CTA BUTTON */}
      <button className="call-button">
        Select a translator and call
      </button>

    </div>
  );
};

export default HomePage;