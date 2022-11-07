import React from "react";
import "./info.css";
import avatarPng from "../../../images/avatar.png";
import avatarWebp from "../../../images/avatar.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ImgWithFallback from "../img-fallback";

const Info = () => {
  return (
    <div id="info">
      <ImgWithFallback
        src={avatarWebp}
        fallback={avatarPng}
        alt="My avatar displayed as pixel art."
        className="avatar"
      />

      <article id="infoOccupation">
        <h3 className="infoDesc">
          A <span className="tenure">multidisciplinary Designer</span> focusing
          on helping brands, products and people make a mark.
        </h3>
      </article>

      <article id="infoSlogan">
        <h3 className="infoDesc">
          Working in the intersection of web and product design to create
          experiences that delight, inspire, and{" "}
          <span className="tenure">shape the future of the internet. </span>
        </h3>
      </article>

      <article id="infoPassion">
        <h3 className="infoDesc">
          In addition to a passion for experiential design + dev, I have a
          special affection for typography and motion graphics.
        </h3>
      </article>

      <article id="infoProvide">
        <h3 className="infoDesc provide">
          Providing to startups, agencies and local brands for{" "}
          <span className="tenure">2+ years.</span>
        </h3>
      </article>

      <div id="infoProcess">
        <div id="resultsWrapper">
          <h5 className="processDesc results">Action</h5>
        </div>

        <div className="processContainer">
          <div class="icons">
            <div className="iconWrapper">
              <span id="conceptDesign">
                <span class="switch"></span>
              </span>
            </div>
            <div className="iconWrapper">
              <span id="finalDeliverables">
                <span class="switch"></span>
              </span>
            </div>
          </div>

          <div className="descWrapper">
            <h5 className="processDesc">
              Concept design to final deliverables.
            </h5>
          </div>
        </div>
      </div>

      <div id="infoProcess">
        <div id="resultsWrapper">
          <h5 className="processDesc results">Impact</h5>
        </div>

        <div className="processContainer">
          <div class="icons">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faCircleCheck} className="reminders" />
            </div>
          </div>

          <div className="descWrapper">
            <h5 className="processDesc">Boost engagement.</h5>
          </div>
        </div>

        <div className="processContainer">
          <div class="icons">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faCircleCheck} className="reminders" />
            </div>
          </div>

          <div className="descWrapper">
            <h5 className="processDesc">Drive sales.</h5>
          </div>
        </div>

        <div className="processContainer">
          <div class="icons">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faCircleCheck} className="reminders" />
            </div>
          </div>

          <div className="descWrapper">
            <h5 className="processDesc">Convert visitors.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
