import React from "react";
import "../styles/HomePage.css";

import homeBg from "../assets/userBackground.svg";
import profileIcon from "../assets/bank.svg";
import coinIcon from "../assets/bank.svg";
import plusIcon from "../assets/bank.svg";

import bankIcon from "../assets/bank.svg";
import taxiIcon from "../assets/taxi.svg";
import mailIcon from "../assets/mail.svg";
import documentsIcon from "../assets/others.svg";
import financesIcon from "../assets/finances.svg";
import othersIcon from "../assets/others.svg";

import homeIcon from "../assets/bank.svg";
import callsIcon from "../assets/bank.svg";
import messagesIcon from "../assets/bank.svg";
import profileNavIcon from "../assets/bank.svg";

const recentCalls = [
  {
    id: 1,
    name: "K. Dmitry",
    topic: "Bank",
    rating: "★★★★☆",
    time: "04:25",
  },
  {
    id: 2,
    name: "P. Natalia",
    topic: "Mail",
    rating: "★★★☆☆",
    time: "03:14",
  },
  {
    id: 3,
    name: "L. Min Ho",
    topic: "Pudonsan",
    rating: "★★★★☆",
    time: "03:10",
  },
];

const topics = [
  { id: 1, name: "Bank", icon: bankIcon },
  { id: 2, name: "Taxi", icon: taxiIcon },
  { id: 3, name: "Mail", icon: mailIcon },
  { id: 4, name: "Documents", icon: documentsIcon },
  { id: 5, name: "Finances", icon: financesIcon },
  { id: 6, name: "Others", icon: othersIcon },
];

const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="home-top-section">
        <header className="home-header">
          <h1 className="home-logo">morago</h1>
          <button className="profile-button" type="button">
            <img src={profileIcon} alt="Profile" />
          </button>
        </header>

        <section className="balance-card">
          <div className="balance-card-top">
            <span className="balance-label">My balance</span>

            <button className="top-up-button" type="button">
              <span>Top up</span>
              <img src={plusIcon} alt="Top up" />
            </button>
          </div>

          <div className="balance-row">
            <img src={coinIcon} alt="Coin" className="coin-icon" />
            <span className="balance-amount">50,000</span>
            <span className="balance-minutes">~10 min</span>
          </div>
        </section>

        <button className="call-button" type="button">
          Select a translator and call
        </button>
      </div>

      <main className="home-content">
        <section className="topics-section">
          <h2 className="section-title">Popular translation topics</h2>

          <div className="topics-grid">
            {topics.map((topic) => (
              <button key={topic.id} className="topic-card" type="button">
                <img src={topic.icon} alt={topic.name} className="topic-icon" />
                <span className="topic-name">{topic.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="recent-calls-section">
          <h2 className="section-title">My recent calls</h2>

          <div className="recent-calls-list">
            {recentCalls.map((call) => (
              <div key={call.id} className="recent-call-card">
                <div className="recent-call-avatar"></div>

                <div className="recent-call-info">
                  <p className="recent-call-name">{call.name}</p>
                  <p className="recent-call-topic">{call.topic}</p>
                </div>

                <div className="recent-call-meta">
                  <p className="recent-call-rating">{call.rating}</p>
                  <p className="recent-call-time">{call.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item nav-item-active" type="button">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </button>

        <button className="nav-item" type="button">
          <img src={callsIcon} alt="My calls" />
          <span>My calls</span>
        </button>

        <button className="nav-item" type="button">
          <img src={messagesIcon} alt="Messages" />
          <span>Messages</span>
        </button>

        <button className="nav-item" type="button">
          <img src={profileNavIcon} alt="Profile" />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;