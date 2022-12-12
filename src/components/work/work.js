import React from "react";
import { Link } from "react-router-dom";

import "./work.css";

import Header from "../header/header.js";
import Picture from "./picture.js";
import Footer from "../footer/footer.js";

import projLogo from "../../images/work/haides.svg";
import projMobile from "../../images/work/haides-mobile.svg";
import { ReactComponent as Star } from "../../images/star.svg";

const Work = () => {
  /*
   * Data is looking good.
   *
   * [x] Iterate through each array, deconstruct the props into singular data point; projectData.title, etc...
   *
   * [ ] Roles iterated with an index to keep track of each element being scanned
   *
   * [ ] Need to figure out media within .json file
   */

  return (
    <>
      <Header link="Info" title="Jericho Fillon" />
      <section id="work">
        <div id="workContainer">
          <div className="wTitleWrapper">
            <h2 className="workTitle">Haides Education</h2>
            <Link to="/">
              <div className="close">Close [X]</div>
            </Link>
          </div>

          <div className="wProjectWrapper">
            <h6 className="wHeaders">Project ‣</h6>
            <Picture
              src={projLogo}
              mobile={projMobile}
              fallback={projMobile}
              alt="A man entering a portal to other experiences."
            />
          </div>

          <div className="wToolsWrapper">
            <h6 className="wHeaders">Roles ‣</h6>

            <div className="tools">
              <div className="wTools">
                <div className="wIcon">
                  <Star className="star" height={15} width={15} />
                </div>
                <h3 className="toolsTitle">Lead Web Designer</h3>
              </div>

              <div className="wTools">
                <div className="wIcon">
                  <Star className="star" height={15} width={15} />
                </div>
                <h3 className="toolsTitle">Front End Developer</h3>
              </div>

              <div className="wTools">
                <div className="wIcon">
                  <Star className="star" height={15} width={15} />
                </div>
                <h3 className="toolsTitle">UI/UX Research</h3>
              </div>
            </div>
          </div>

          <div className="wDescWrapper">
            <h6 className="wHeaders">Description ‣</h6>
            <p className="workDescription">
              Introduce a digital educational platform for aspiring barbers &
              stylists to elevate their skills.
            </p>

            <br />

            <p className="workDescription">
              Helping students succeed in the real world as industry
              professionals. Explore a wide range of courses that are available
              to all levels of experience.
            </p>
          </div>

          <div className="wVisitWrapper">
            <Link to="/">
              <div className="visitBtn">
                <p className="visitSite">Visit Site</p>
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Work;