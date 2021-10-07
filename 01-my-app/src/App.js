import React from "react";
import Hello from "./components/hello/Hello";
import Test from "./components/test/Test";
import Jsx from "./components/jsx/Jsx";
import InlineStyle from "./style/InlineStyle";
import InternalStyle from "./style/InternalStyle";
import ExternalStyle from "./style/ExternalStyle";
import Clock1 from "./components/clock1/Clock1";


function App() {
  return (
    <div>
      {/* Merhaba Dünya(App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle /> */}
      <Clock1 />
    </div>
  );
}

export default App;
