import ExtendedEditor from "./ExtendedEditor";
import ImageDisplay from "./ImageDisplay";
import ImageEditor from "./ImageEditor";
import "./styles.css";
import TestEditor from "./TestEditor";

const dataUri =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
export default function App() {
  console.log("DOM at app rendering:: ", document);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <TestEditor /> */}
      {/* <ImageEditor /> */}
      {/* <ExtendedEditor /> */}
      <ImageDisplay data={dataUri} />
    </div>
  );
}
