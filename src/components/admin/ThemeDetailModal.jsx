import React, { useEffect } from "react";
import eyeIcon from "../../assets/eye.svg";
import defaultAvatar from "../../assets/avatar.svg";
import "../../styles/Admin/ThemesPages/ThemeDetailModal.css";

const ThemeDetailModal = ({ theme, loading, error, onClose, onDelete }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleDelete = async () => {
    if (!theme?.id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this theme?",
    );
    if (!confirmed) return;

    await onDelete(theme.id);
    onClose();
  };

  if (!theme && !loading && !error) return null;

  const categoryName = theme?.categoryName || "-";

  return (
    <div
      className="morago-theme-detail-modal__overlay"
      onClick={onClose}
      aria-label="Close theme modal overlay"
    >
      <div
        className="morago-theme-detail-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Theme details modal"
      >
        <button
          type="button"
          className="morago-theme-detail-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {loading ? (
          <p className="morago-theme-detail-modal__state">Loading...</p>
        ) : error ? (
          <p className="morago-theme-detail-modal__state morago-theme-detail-modal__state--error">
            {error}
          </p>
        ) : (
          <>
            <div className="morago-theme-detail-modal__top">
              <div className="morago-theme-detail-modal__image-wrap">
                {theme?.iconUrl ? (
                  <img
                    src={theme.iconUrl}
                    alt={theme.title || theme.name}
                    className="morago-theme-detail-modal__image"
                    onError={(e) => {
                      e.currentTarget.src = defaultAvatar;
                    }}
                  />
                ) : (
                  <div className="morago-theme-detail-modal__image-placeholder">
                    <img
                      src={eyeIcon}
                      alt="theme placeholder"
                      className="morago-theme-detail-modal__placeholder-icon"
                    />
                  </div>
                )}
              </div>

              <div className="morago-theme-detail-modal__banner" />

              <div className="morago-theme-detail-modal__actions">
                <button
                  type="button"
                  className="morago-theme-detail-modal__action-btn"
                  aria-label="Edit theme"
                >
                  Edit <span>→</span>
                </button>

                <button
                  type="button"
                  className="morago-theme-detail-modal__delete-btn"
                  onClick={handleDelete}
                  aria-label="Delete theme"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="morago-theme-detail-modal__info">
              <div className="morago-theme-detail-modal__info-left">
                <p className="morago-theme-detail-modal__label">Theme name</p>
                <p className="morago-theme-detail-modal__value">
                  {theme?.title || theme?.name || "-"}
                </p>
              </div>

              <div className="morago-theme-detail-modal__info-right">
                <div className="morago-theme-detail-modal__info-block">
                  <p className="morago-theme-detail-modal__label">Category:</p>
                  <p className="morago-theme-detail-modal__subvalue">
                    {categoryName}
                  </p>
                </div>

                <div className="morago-theme-detail-modal__info-block">
                  <p className="morago-theme-detail-modal__label">Status:</p>
                  <p className="morago-theme-detail-modal__subvalue">
                    {theme?.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeDetailModal;
