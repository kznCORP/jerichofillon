import React from "react";
import "./dune.css";

const Dune = ({
  src,
  mobile,
  fallback,
  type = "image/webp",
  alt,
  className,
}) => {
  return (
    <picture className="duneWrapper">
      <source media="(min-width: 768px)" srcSet={src} type={type} />
      <source media="(max-width: 768px)" srcSet={mobile} type={type} />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  );
};

export default Dune;
