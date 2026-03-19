import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const amounts = ["10,000 won", "30,000 won", "50,000 won", "100,000 won"];

const TopUpPage = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState("10,000 won");
  const [senderName, setSenderName] = useState("");

  return (
    <div className="top-up-page">
      <header className="top-up-header">
        <button
          type="button"
          className="top-up-back-button"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </header>

      <main className="top-up-content">
        <section className="top-up-title-section">
          <h1 className="top-up-title">Top up balance</h1>
          <p className="top-up-description">
            The minimum top-up amount is 10,000 won. Funds will be credited to
            the account within one working day.
          </p>
        </section>

        <section className="top-up-account-section">
          <h2 className="top-up-section-label">Account for top-up</h2>

          <div className="top-up-account-card">
            <div className="top-up-account-row">
              <span className="top-up-account-number">1234 5678 9101 1234</span>
              <button type="button" className="top-up-copy-button">
                Copy
              </button>
            </div>

            <p className="top-up-bank-name">KEB Hana Bank</p>
          </div>
        </section>

        <section className="top-up-form-section">
          <label className="top-up-section-label" htmlFor="senderName">
            Sender&apos;s name
          </label>

          <input
            id="senderName"
            type="text"
            className="top-up-input"
            placeholder="Last Name First Name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </section>

        <section className="top-up-amount-section">
          <h2 className="top-up-section-label">Amount to top up</h2>

          <div className="top-up-amount-list">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`top-up-amount-option ${
                  selectedAmount === amount ? "selected" : ""
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                <span className="top-up-amount-text">{amount}</span>
                {selectedAmount === amount && (
                  <span className="top-up-checkmark">✓</span>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="top-up-footer">
        <button type="button" className="top-up-submit-button">
          Request top-up
        </button>
        <p className="top-up-support-text">Support</p>
        <div className="home-indicator"></div>
      </footer>
    </div>
  );
};

export default TopUpPage;