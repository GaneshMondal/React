

import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox";

function Description() {
  return <h3>I am the description</h3>;
}

function App() {
  return (
    <>
      <MsgBox userName="Ganesh" textColor="blue"/>
      <ProductTab />
    </>
  );
}

export default App;