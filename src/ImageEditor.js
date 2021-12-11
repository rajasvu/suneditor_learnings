import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const ImageEditor = (props) => {
  const imageUrl = "http://suneditor.com/sample/img/sunset.jpg";
  return (
    <div>
      <p> My Other Contents </p>
      <img
        alt="sample"
        src="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/"
      />
      <SunEditor defaultValue={`"<img alt='Editor' src=${imageUrl}></img>"`} />
    </div>
  );
};
export default ImageEditor;
