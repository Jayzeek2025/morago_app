import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import homeIcon from "../assets/home.svg";
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

const SelectTopic = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedTopic = location.state?.selectedTopic;

  return (
    <div className="select-translator-page">
      <div className="select-translator-header">
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>morago</h1>
      </div>

      <main className="select-translator-content">
        <section>
          <h2>Selected Topic</h2>

          {selectedTopic ? (
            <div>
              <img src={selectedTopic.icon} alt={selectedTopic.name} />
              <p>{selectedTopic.name}</p>
            </div>
          ) : (
            <p>No topic selected</p>
          )}
        </section>

        <section>
          <h2>Available Translators</h2>

          <div>
            {translators.map((translator) => (
              <div key={translator.id}>
                <p>{translator.name}</p>
                <p>{translator.topic}</p>
                <p>
                  {translator.rating} ({translator.reviews})
                </p>
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

      <div className="home-indicator"></div>
    </div>
  );
};

export default SelectTopic;