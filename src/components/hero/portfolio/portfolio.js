import React from "react";
import "./portfolio.css";


const Portfolio = () => {
  return (
    <main id="portfolio">
      <div id="portfolioContainer">
        <div id="slogan">
          <h6 className="subheading">Portfolio</h6>
          <h1 className="sloganDesc">
            A collection of work, past and present.
          </h1>
          <h2 className="sloganDesc">
            Some built for today, for tomorrow, and others for the future.
          </h2>
        </div>
        <nav className="portfolioMenu" aria-label="Table of Contents">
          <a href="/" role="button" tabIndex="0">
            <div className="portfolioLinkWrapper">
              <div className="portfolioLink">
                <h4 id="portfolioName">Hair By Nicola</h4>
                <h6 id="portfolioCategory">Coming Soon</h6>
              </div>

              <div className="portfolioDesc" id="active-desc-demo">
                <h6 id="desc">
                  The artist behind the chair / A digital portfolio paired with
                  Square's booking and payment systems.
                </h6>
              </div>
            </div>
          </a>

          <a
            href="https://haideseducation.com"
            role="button"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolioLinkWrapper">
              <div className="portfolioLink">
                <h4 id="portfolioName">Haides Edu</h4>
                <h6 id="portfolioCategory">Platform</h6>
              </div>

              <div className="portfolioDesc">
                <h6 id="desc">
                  Introduce a digital educational platform for aspiring barbers
                  & stylists to elevate their skills.Helping students succeed in
                  the real world as industry professionals. Explore a wide range
                  of courses that are available to all levels of experience.
                </h6>
              </div>
            </div>
          </a>

          <a
            href="https://cannadiscount.ca"
            role="button"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolioLinkWrapper">
              <div className="portfolioLink">
                <h4 id="portfolioName">Cannadiscount</h4>
                <h6 id="portfolioCategory">Dispensary</h6>
              </div>

              <div className="portfolioDesc">
                <h6 id="desc">
                  Cannadiscount is one of Vancouver's most trusted online
                  cannabis dispensaries. Providing a digital platform for local
                  businesses to thrive and capitalize on e-commerce
                  opportunities in the market.
                </h6>
              </div>
            </div>
          </a>

          <a
            href="https://unlikelycitizen.com"
            role="button"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolioLinkWrapper">
              <div className="portfolioLink">
                <h4 id="portfolioName">Unlikely Citizen</h4>
                <h6 id="portfolioCategory">Local Biz</h6>
              </div>

              <div className="portfolioDesc">
                <h6 id="desc">
                  Built on the Webflow platform for hosting a local e-commerce
                  storefront for unique scents and other ‘unlikely’ goods.
                  Established in 2020, Unlikely Citizen’s goals stayed the same.
                  Create a ‘badass’ community where everyone is welcome.
                </h6>
              </div>
            </div>
          </a>

          <a
            href="https://bcitma.ca"
            role="button"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolioLinkWrapper">
              <div className="portfolioLink">
                <h4 id="portfolioName">BCIT Marketing Association</h4>
                <h6 id="portfolioCategory">Redesign</h6>
              </div>

              <div className="portfolioDesc">
                <h6 id="desc">
                  A by-product of an international digital media competition
                  finishing in honourable mentions for the 2020 Marketing
                  Association. Design + developed back in 2020. Still being used
                  to this day. A testament to the quality of work done by our
                  team.
                </h6>
              </div>
            </div>
          </a>

          <a href="/" role="button" tabIndex="0">
            <div className="portfolioLinkWrapper" id="playground">
              <div className="portfolioLink">
                <h4 id="portfolioName">Playground</h4>
                <h6 id="portfolioCategory">Coming Soon</h6>
              </div>

              <div className="portfolioDesc">
                <h6 id="desc">
                  My experimental work; Rendering 3D objects onto the browser
                  for added interactivity.
                </h6>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </main>
  );
};

export default Portfolio;
