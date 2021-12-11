import React from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import MediaCard from "./CustomImageComponent";

const ExtendedEditor = (props) => {
  function handleKeyDown(event) {
    console.log(event.target); //Get the keydown event
  }

  function showController(name, controllers) {
    console.log(name, controllers);
  }
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor
        setOptions={{
          height: 200,
          buttonList: buttonList.complex // Or Array of button list, eg. [['font', 'align'], ['image']]
          // plugins: [font] set plugins, all plugins are set by default
          // Other option
        }}
        onMouseDown={handleKeyDown}
        setContents={"<div><MediaCard /></div>"}
        showController={showController}
      />
      <MediaCard />
    </div>
  );
};
export default ExtendedEditor;
