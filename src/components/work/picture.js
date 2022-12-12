import React from "react";
import "./work.css";

const Picture = ({ src, mobile, fallback, type = "image/webp", alt }) => {
  return (
    <picture className="wImageWrapper">
      <source media="(min-width: 768px)" srcSet={src} type={type} />
      <source media="(max-width: 768px)" srcSet={mobile} type={type} />
      <img src={fallback} alt={alt} className="wImage" />
    </picture>
  );
};

export default Picture;
