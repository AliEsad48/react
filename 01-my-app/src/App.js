import React from "react"

import Birthday from "./components/birthday/Birthday"
import Clock3 from "./components/clock3/Clock3"
import Counter from "./components/counter/Counter"
import Countries from "./components/countries/Countries"

import Odev from "./components/odev/Odev"
import Posts from "./components/posts/Posts"
// import BSClassic from "./components/bootstrap-classic/BSClassic";
// import BSReact from "./components/bootstrap-react/BSReact";
// import Clock1 from "./components/clock1/Clock1";
// import Clock2 from "./components/clock2/Clock2";
// import Hello from "./components/hello/Hello";
// import Image from "./components/image/Image";
// import Jsx from "./components/jsx/Jsx";
// import Profile from "./components/profile/Profile";
// import Props from "./components/props/Props";
// import Header from "./components/shop/Header";
import Shop from "./components/shop/Shop"
import State from "./components/state/State"
// import ExternalStyle from "./components/style/ExternalStyle";
// import InlineStyle from "./components/style/InlineStyle";
// import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test"
import ChangeTitle from "./components/useEffect/ChangeTitle"
import UserCards from "./components/userCards/UserCards"
import Zcountries from "./components/zcountries/Zcountries"

function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1633156583772-3c3ccee99b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"

  return (
    <div>
      {/*
       
     Merhaba Dünya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle />
 
      <Clock1 />

      

      <Props ad="Ziya" soyad="Sarı" />
      <Props ad="Ali" soyad="Kara" />
      <Props ad="Ayşe" soyad="Pembe" />
      <Props ad="Hakan" soyad="Mavi" />

       

      <Clock2 yaziRengi="#FFFFFF" zeminRengi="#000000" />
     


      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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

        <Profile
          avatar="https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
          name="Mehmet Gel"
          location="Turkiye, İzmir"
          shot="43"
          followers="123"
          following="4545"
        />
      </div>

     

      <Image />
       
       <BSClassic />
    
    <BSReact />
   
    <Shop />
     
     <State />
    

      <Counter />
      
 <Odev />
 
      <Birthday />
      
      <Clock3 />

     
      <ChangeTitle />
       
      <UserCards />

      <Countries />
           
      <Zcountries />
       */}
      <Posts />
    </div>
  )
}

export default App
