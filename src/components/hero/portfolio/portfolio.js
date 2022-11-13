import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  //Scroll through list to highlight elements

  render() {
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
                  <h6 id="portfolioCategory">Stylist</h6>
                </div>

                <div className="portfolioDesc" id="active-desc-demo">
                  <h6 id="desc">
                    The artist behind the chair / A digital portfolio paired
                    with Square's booking and payment systems.
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
                    Introduce an educational platform for aspiring barbers and
                    hairtsylists.
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
                    Marketplace for two locals to offer creative aromas and
                    goods online.
                  </h6>
                </div>
              </div>
            </a>

            <a
              href="https://kyzen.ca"
              role="button"
              tabIndex="0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolioLinkWrapper">
                <div className="portfolioLink">
                  <h4 id="portfolioName">Kyzen</h4>
                  <h6 id="portfolioCategory">Web3</h6>
                </div>

                <div className="portfolioDesc">
                  <h6 id="desc">
                    Consulting agency for potential Web 3.0 retail investors and
                    adventurers.
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
                    finishing in HMs for the 2020 Marketing Association.
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
  }
}

export default Portfolio;
