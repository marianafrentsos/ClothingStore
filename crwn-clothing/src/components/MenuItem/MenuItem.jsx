import React from "react";
import "./MenuItem.scss";
export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menuItem`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
