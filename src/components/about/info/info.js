import React from "react";
import "./info.css";

import tunnel from "../../../images/tunnel.png";

const Info = () => {
  return (
    <>
      <section id="info">
        <div className="infoDescription">
          <h2 className="descText sbText hidden">
            <span>Based</span>
            <span>in</span>
            <span>Vancouver.</span>
          </h2>

          <h1 className="descText">
            I'm an independent creative developer and digital story—teller
            focused on helping brands, products and people make a mark.
          </h1>

          <h3 className="descText">
            I believe that web design could be more diverse and inspiring.
          </h3>

          <h2 className="descText sbText">
            <span>Simple,</span>
            <span>yet</span>
            <span>expressive.</span>
          </h2>
        </div>

        <picture className="tunnelWrapper">
          <img src={tunnel} className="tunnel" alt="Tunnels" />
        </picture>

        <div className="infoAvailability">
          <h2 className="descText sbText">
            <span>Open</span>
            <span>Availability.</span>
          </h2>

          <h2 className="descText">
            Responsive, reliable and ready to work effectively with future
            clients and teammates.
          </h2>

          <h2 className="descText sbText">
            <span>Got a project in mind?</span>
            <span>Let's chat.</span>
          </h2>
        </div>

        {/* Mail with Project Inquiry Template */}
        <a
          href="mailto:fillonjericho@gmail.com?subject=Project%20Inquiry&body=Hello%2C%20thank%20you%20for%20taking%20the%20time%20to%20surf%20through%20my%20portfolio%20and%20reach%20out%20%3A-)%0D%0A%0D%0APlease%20fill%20in%20the%20necessary%20information%20so%20that%20we%20can%20work%20together!%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AGoal%3A%0D%0ACurrent%20Website(if%20applicable)%3A%0D%0ACompetitors(if%20applicable)%3A%0D%0ADesired%20Platform%20(WordPress%2FShopify%2FWebflow%2FCustom)%3A%20%0D%0ATimeline%20(deadline%2Flaunch%20date)%3A%0D%0ABudget%3A%0D%0A%0D%0A%0D%0AAny%20additional%20comments%20you'd%20like%20to%20mention%3A%0D%0A%0D%0A%0D%0A*Upon%20sending%20this%20email%2C%20I%20will%20reply%20back%20within%20the%20next%2024%20hours%20to%20accommodate%20your%20inquiry*"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink"
        >
          <button className="contactMail" id="mail" type="button">
            <h4>hello@jerichofillon.com</h4>
          </button>
        </a>
      </section>
    </>
  );
};

export default Info;
