import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
    </div>
  );
};
export default App;
