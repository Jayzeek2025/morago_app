import React from "react";
import "../styles/ProfilePage.css";

import homeIcon from "../assets/home.svg";
import callsIcon from "../assets/calls.svg";
import messagesIcon from "../assets/message.svg";
import profileNavIconActive from "../assets/profile-active.svg";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="profile-header-card">
        <h1 className="profile-title">My Profile</h1>

        <div className="profile-user-card">
          <div className="profile-avatar">
            <div className="profile-avatar-placeholder"></div>
          </div>

          <div className="profile-user-info">
            <p className="profile-name">First and Last Name</p>
            <p className="profile-phone">010 1234 56 78</p>
          </div>

          <button type="button" className="profile-edit-button">
            Edit
          </button>
        </div>
      </header>

      <main className="profile-content">
        <section className="profile-section">
          <h2 className="profile-section-title">Settings</h2>

          <div className="profile-menu-list">
            <button type="button" className="profile-menu-item">
              <span>Change Password</span>
            </button>

            <button type="button" className="profile-menu-item">
              <span>Notifications</span>
            </button>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="profile-section-title">About the App</h2>

          <div className="profile-menu-list">
            <button type="button" className="profile-menu-item">
              <span>FAQ</span>
            </button>

            <button type="button" className="profile-menu-item">
              <span>Privacy Policy</span>
            </button>

            <button type="button" className="profile-menu-item">
              <span>Contact Us</span>
            </button>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item" type="button">
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

        <button className="nav-item nav-item-active" type="button">
          <img src={profileNavIconActive} alt="Profile" />
          <span>Profile</span>
        </button>
      </nav>

      <div className="home-indicator"></div>
    </div>
  );
};

export default ProfilePage;
