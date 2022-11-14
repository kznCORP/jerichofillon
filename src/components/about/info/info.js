import React from "react";
import "./info.css";

import { ReactComponent as BlueLayer } from "../../../images/blue.svg";
import { ReactComponent as YellowLayer } from "../../../images/yellow.svg";
import { ReactComponent as GreenLayer } from "../../../images/green.svg";
import { ReactComponent as SpeechBubbleSVG } from "../../../images/speech-bubble.svg";

const Info = () => {
  return (
    <section id="info">
      <div id="aboutMe">
        <article id="infoOccupation">
          <div>
            <h6 className="subheading">Jericho Fillon</h6>
          </div>
          <h1 className="infoOccupation infoDesc">
            A multidisciplinary Designer focusing on helping brands, products
            and people make a mark.
          </h1>
        </article>

        <article id="infoShape">
          <h3 className="infoShape infoDesc">
            Working in the intersection of web and product design to create
            experiences that delight, inspire, and shape the future of the
            internet.
          </h3>
        </article>

        <article id="infoPassion">
          <h3 className="infoPassion infoDesc">
            Driven by a passion for experiential design + dev, I also have a
            special affection for typography and motion graphics.
          </h3>
        </article>
      </div>

      <div id="approach">
        <article id="infoProvide">
          <div>
            <h6 className="subheading">Approach</h6>
          </div>
          <h3 className="infoProvide infoDesc">
            Providing digital solutions for startups, agencies and local brands
            for 2+ years.
          </h3>
        </article>

        <div id="infoProcess">
          <div id="leftBorder"></div>

          <article className="processContainer">
            <h6 className="processNum">01</h6>
            <div className="processWrapper">
              <h4 className="processDesc">
                Before we can start making things on your behalf, I want to
                understand your goals as clearly as possible.
              </h4>

              <YellowLayer className="layers" />
            </div>
          </article>

          <article className="processContainer">
            <h6 className="processNum">02</h6>
            <div className="processWrapper">
              <h4 className="processDesc">
                I'll ask some questions, you can ask some questions, and then
                we're off and running.
              </h4>

              <BlueLayer className="layers" />
            </div>
          </article>

          <article className="processContainer">
            <h6 className="processNum">03</h6>
            <div className="processWrapper">
              <h4 className="processDesc">
                From concept design to final deliverables, I work intentionally
                and fast (in that order).
              </h4>

              <GreenLayer className="layers" />
            </div>
          </article>

          <div id="rightBorder"></div>
        </div>
      </div>

      <div id="contact">
        <div className="contactContainer">
          <article id="contactDesc">
            <div>
              <h6 className="subheading">Open Availability</h6>
            </div>
            <h2 className="contactMe">Let's talk about your next project.</h2>
          </article>

          <div id='speechBubble'>
            <a
              href="mailto:fillonjericho@gmail.com?subject=Project%20Inquiry&body=Hello%2C%20thank%20you%20for%20taking%20the%20time%20to%20surf%20through%20my%20portfolio%20and%20reach%20out%20%3A-)%0D%0A%0D%0APlease%20fill%20in%20the%20necessary%20information%20so%20that%20we%20can%20work%20together!%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AGoal%3A%0D%0ACurrent%20Website(if%20applicable)%3A%0D%0ACompetitors(if%20applicable)%3A%0D%0ADesired%20Platform%20(WordPress%2FShopify%2FWebflow%2FCustom)%3A%20%0D%0ATimeline%20(deadline%2Flaunch%20date)%3A%0D%0ABudget%3A%0D%0A%0D%0A%0D%0AAny%20additional%20comments%20you'd%20like%20to%20mention%3A%0D%0A%0D%0A%0D%0A*Upon%20sending%20this%20email%2C%20I%20will%20reply%20back%20within%20the%20next%2024%20hours%20to%20accommodate%20your%20inquiry*"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contactMailWrapper">
                <SpeechBubbleSVG />
                <button className="contactMail" id="mail" type="button">
                  <h4>hello@jerichofillon.com</h4>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
