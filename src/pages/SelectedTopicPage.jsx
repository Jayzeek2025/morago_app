import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SelectedTopicPage.css";

import homeIconActive from "../assets/home-active.svg";
import callsIcon from "../assets/calls.svg";
import messagesIcon from "../assets/message.svg";
import profileNavIcon from "../assets/profile.svg";

const translators = [
  {
    id: 1,
    name: "Ms. Diana",
    topic: "Bank",
    rating: "★★★★☆",
    reviews: 7,
  },
  {
    id: 2,
    name: "Ms. Natalia",
    topic: "Post",
    rating: "★★★☆☆",
    reviews: 34,
  },
  {
    id: 3,
    name: "Mr. Min Ho",
    topic: "Pudonsan",
    rating: "★★★★☆",
    reviews: 67,
  },
  {
    id: 4,
    name: "Ms. Natalia",
    topic: "Post",
    rating: "★★★☆☆",
    reviews: 34,
  },
  {
    id: 5,
    name: "Mr. Min Ho",
    topic: "Pudonsan",
    rating: "★★★★☆",
    reviews: 67,
  },
];

const SelectedTopicPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedTopic = location.state?.selectedTopic;

  return (
    <div className="select-translator-page">
      <header className="select-translator-header">
        <button
          type="button"
          className="select-translator-back"
          onClick={() => navigate(-1)}
        >
          <span>←</span>
        </button>

        <h1 className="select-translator-logo">morago</h1>
      </header>

      <main className="select-translator-content">
        <section className="selected-topic-section">
          <h2 className="select-translator-section-title">Selected Topic</h2>

          {selectedTopic ? (
            <div className="selected-topic-card">
              <img
                src={selectedTopic.icon}
                alt={selectedTopic.name}
                className="selected-topic-icon"
              />
              <p className="selected-topic-name">{selectedTopic.name}</p>
            </div>
          ) : (
            <p className="selected-topic-empty">No topic selected</p>
          )}
        </section>

        <section className="available-translators-section">
          <h2 className="select-translator-section-title">
            Available Translators
          </h2>

          <div className="translator-list">
            {translators.map((translator) => (
              <button
                key={translator.id}
                type="button"
                className="translator-card"
              >
                <div className="translator-avatar"></div>

                <div className="translator-info">
                  <p className="translator-name">{translator.name}</p>
                  <p className="translator-topic">{translator.topic}</p>
                </div>

                <div className="translator-meta">
                  <p className="translator-rating">{translator.rating}</p>
                  <p className="translator-reviews">({translator.reviews})</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item" type="button">
          <img src={homeIconActive} alt="Home" />
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

      <div className="home-indicator"></div>
    </div>
  );
};

export default SelectedTopicPage;
