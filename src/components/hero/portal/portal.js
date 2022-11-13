import React from "react";
import "./portal.css";

const Portal = ({
  src,
  mobile,
  fallback,
  type = "image/webp",
  alt,
  className,
}) => {
  return (
    <picture className="portalWrapper">
      <source media="(min-width: 768px)" srcSet={src} type={type} />
      <source media="(max-width: 768px)" srcSet={mobile} type={type} />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  );
};

export default Portal;
