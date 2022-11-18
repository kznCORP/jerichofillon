import React from "react";

import "./loading.css";

const Loading = ({count}) => {
  return (
    <>
      <section id="loadingScreen">
        <div id="loadingBg">
          <h1 id="count">{count}</h1>
        </div>
      </section>
    </>
  );
};

export default Loading;
