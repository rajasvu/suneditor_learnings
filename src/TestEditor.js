import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const TestEditor = (props) => {
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor defaultValue="<p>The editor's default value</p>" />
    </div>
  );
};
export default TestEditor;
