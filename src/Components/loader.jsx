import React from "react";

function Loader() {
  return (
    <div className="mainLoaderDiv">
      <div
        style={{ width: "5rem", height: "5rem" }}
        className="spinner-border LoaderDiv"
        role="status"
      ></div>
    </div>
  );
}

export default Loader;
