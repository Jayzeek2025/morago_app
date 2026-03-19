import React, { useState } from "react";
import "../styles/MyCallsPage.css";

import homeIcon from "../assets/home.svg";
import callsIconActive from "../assets/Phone-active.svg";
import messagesIcon from "../assets/message.svg";
import profileNavIcon from "../assets/profile.svg";

const recentCalls = [
  {
    id: 1,
    name: "K. Diana",
    topic: "Bank",
    date: "05.05.2022",
    duration: "15 minutes",
    statusDot: "red",
  },
  {
    id: 2,
    name: "Translator 1",
    topic: "Topic 1",
    date: "05.05.2022",
    duration: "15 minutes",
    statusDot: "green",
  },
  {
    id: 3,
    name: "Translator 2",
    topic: "Topic 2",
    date: "05.05.2022",
    duration: "15 minutes",
    statusDot: "red",
  },
  {
    id: 4,
    name: "Translator 3",
    topic: "Topic 3",
    date: "05.05.2022",
    duration: "15 minutes",
    statusDot: "red",
  },
];

const MyCallsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="my-calls-page">
      <header className="my-calls-header">
        <h1 className="my-calls-logo">morago</h1>
      </header>

      <main className="my-calls-content">
        <div className="my-calls-tabs">
          <button
            type="button"
            className={activeTab === "all" ? "tab-button active" : "tab-button"}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>

          <button
            type="button"
            className={
              activeTab === "missed" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("missed")}
          >
            Missed
          </button>
        </div>

        <section className="my-calls-section">
          <h2 className="my-calls-title">Recent</h2>

          <div className="my-calls-list">
            {recentCalls.map((call) => (
              <div key={call.id} className="my-call-card">
                <div className="my-call-avatar"></div>

                <div className="my-call-info">
                  <div className="my-call-name-row">
                    <p className="my-call-name">{call.name}</p>
                    <span className={`status-dot ${call.statusDot}`}></span>
                  </div>
                  <p className="my-call-topic">{call.topic}</p>
                </div>

                <div className="my-call-meta">
                  <p className="my-call-date">{call.date}</p>
                  <p className="my-call-duration">{call.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item" type="button">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </button>

        <button className="nav-item nav-item-active" type="button">
          <img src={callsIconActive} alt="My calls" />
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

      <div className="home-indicator"></div>
    </div>
  );
};

export default MyCallsPage;