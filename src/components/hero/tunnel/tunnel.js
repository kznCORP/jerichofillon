import "./tunnel.css";
import React from "react";
import { ReactComponent as TunnelSVG } from "../../../images/tunnel.svg";

const Tunnel = () => {
  return (
    <section id="tunnel">
      <div id="tunnelWrapper">
        <TunnelSVG className="tunnelSvg" />
      </div>
    </section>
  );
};

export default Tunnel;
