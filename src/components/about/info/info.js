import React from "react";
import "./info.css";
import logo from "../../../images/avatar.png";

const Info = () => {
  return (
    <div id="info">
      <div className="imgWrapper">
        <img src={logo} className="avatar" alt="avatar"></img>
      </div>

      <div className="infoNameWrapper">
        <h1 id="infoName">Jericho Fillon</h1>
        <h6 id="infoPronoun">he/him</h6>
      </div>

      <div className="infoOccupation">
        <h3 className="infoDesc">
          A <span id="gradientText">multidisciplinary Designer</span> focusing
          on helping brands, products and people make a mark.
        </h3>
      </div>

      <div className="infoProcess">
        <div className="iconWrapper">
          <div id="conceptDesign">
            <div class="switch"></div>
          </div>
          <h3 className="infoDesc">From concept design</h3>
        </div>
        <div className="iconWrapper">
          <div id="finalDeliverables">
            <div class="switch"></div>
          </div>
          <h3 className="infoDesc">To final deliverables</h3>
        </div>
      </div>

      <div className="infoSlogan">
        <h3 className="infoDesc">
          Working in the intersection of web and product design to create
          experiences that delight, inspire, and shape the future of the
          internet.
        </h3>
      </div>

      <div className="infoMore">
        <h4 className="infoDesc" id="moreDesc">
          Boosting engagement, driving sales, and converting customers for
          startups, agencies, and local business clients for{" "}
          <span id="tenure">2+ years.</span>
        </h4>
      </div>
    </div>
  );
};

export default Info;
