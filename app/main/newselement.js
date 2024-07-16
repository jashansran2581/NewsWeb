import React from "react";
import "./newselement.css";

const NewsElement = ({ title, description, url, image }) => {
  return (
    <div className="newselement">
      <img className="newsimage" src={image} alt={title} />
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
