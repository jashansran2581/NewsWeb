import React from "react";
import "./newselement.css";

const NewsElement = ({ title, description, url, image }) => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150"; // Fallback image URL
  };

  return (
    <div className="newselement">
      <img
        className="newsimage"
        src={image}
        alt={title}
        onError={handleImageError}
      />
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default NewsElement;