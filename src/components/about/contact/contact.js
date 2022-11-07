import React from "react";
import "./contact.css";

import { ReactComponent as SpeechBubbleSVG } from "../../../images/speech-bubble.svg";

const Contact = () => {
  return (
    <div id="contactMe">
      <div className="contactWrapper">
        <h5 className="availability">Open Availability</h5>
        <h2 className="contactInfo">Let's talk about your next project.</h2>

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

        <a href="/">
          <div className="contactScheduleWrapper">
            <button className="contactSchedule" id="consultation">
              <h4>or schedule a free consulation</h4>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
