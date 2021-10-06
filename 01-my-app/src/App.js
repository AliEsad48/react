import React from "react";
import Hello from "./components/hello/Hello";
import Test from "./components/test/Test";
import Jsx from "./components/jsx/Jsx";
import InlineStyle from "./style/InlineStyle";
import InternalStyle from "./style/InternalStyle";


function App() {
  return (
    <div>
      Merhaba Dünya(App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
    </div>
  );
}

export default App;
