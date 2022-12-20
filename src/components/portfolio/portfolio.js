import React from "react";

import "./portfolio.css";

const Portfolio = ({ data }) => {
  return (
    <>
      <main>
        <section id="portfolio">
          <div className="pfWrapper">
            {data.map((project) => {
              return (
                <div className="pfCard" id={project.styles} key={project.id}>
                  <div className="pfTop">
                    <div>
                      <p className="subheaders">/ Role</p>

                      {project.roles.map((role) => {
                        return (
                          <h3 className="roles" key={role}>
                            {role}
                          </h3>
                        );
                      })}
                    </div>

                    <div className="pfLogoWrapper">
                      <p className="subheaders">/ Logo</p>
                      <a href={project.url}>
                        <img src={project.src} className="pfLogo" alt="Logo" />
                      </a>
                    </div>
                  </div>

                  <div className="pfBottom">
                    <div className="pfName">
                      <p className="subheaders">/ Project</p>
                      <a
                        href={project.url}
                        role="button"
                        tabIndex="0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="pfTitle">{project.name}</h3>
                      </a>
                    </div>

                    <div className="pfVisit">
                      <a href={project.url}>
                        <h6 className="pfLink">Visit &#8594;</h6>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;

// All I have to change is the logos.
// & responsive
