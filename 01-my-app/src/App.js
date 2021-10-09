import React from "react";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import ExternalStyle from "./style/ExternalStyle";
import InlineStyle from "./style/InlineStyle";
import InternalStyle from "./style/InternalStyle";
import Test from "./components/test/Test";
function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1633156583772-3c3ccee99b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";
  return (
    <div>
      {/*
       
     Merhaba Dünya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
     // <ExternalStyle />
 
      <Clock1 />
      
      <Props ad="Ziya" soyad="Sarı" />
      <Props ad="Ali" soyad="Kara" />
      <Props ad="Ayşe" soyad="Pembe" />
      <Props ad="Hakan" soyad="Mavi" />
       
      <Clock2 yaziRengi="#FFFFFF" zeminRengi="#000000" />
     
*/}
      <Profile
        avatar={avatarUrl}
        name="Ali Gel"
        location="Turkiye, İstanbul"
        shot="4"
        followers="25"
        following="45"
      />
      <Profile
        avatar="https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
        name="Mehmet Gel"
        location="Turkiye, İzmir"
        shot="43"
        followers="123"
        following="4545"
      />
    </div>
  );
}
export default App;