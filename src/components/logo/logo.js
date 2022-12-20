import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logoWrapper">
      <picture>
        <video className="logoVideo" loop muted autoPlay playsInline>
          {/* <source src="https://ik.imagekit.io/ricosuave/LOOP_FINAL_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1671185855200" /> */}
        </video>
      </picture>
    </div>
  );
};

export default Logo;
