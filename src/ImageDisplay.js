import React from "react";

const ImageDisplay = (props) => {
  console.log("DOM at Image rendering:: ", document);
  return (
    <div>
      <p> Image display component to render images based on dataURI format</p>
      <img id="imagePlaceHolder" hidden src={props.data} alt="Data URI" />
      <canvas />
    </div>
  );
};
export default ImageDisplay;
