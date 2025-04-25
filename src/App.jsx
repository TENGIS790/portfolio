import "./App.css";

import Body from "./component/body";
import About from "./component/section2";
import Performance from "./component/section3";
import Hobby from "./component/section4";
import Contact from "./component/section5";

function App() {
  return (
    <>
      <Body />
      <About />
      <Performance />
      <Hobby/>
      <Contact/>
    </>
  );
}

export default App;