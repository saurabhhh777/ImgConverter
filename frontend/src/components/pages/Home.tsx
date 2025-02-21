// import React from "react";
import Navbar from "../NavbarPage/Navbar.tsx";
import Pngtojpg from "../Tools/Pngtojpg.tsx";
import Footer from "./Footer.tsx";
import Main from "./Main.tsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Pngtojpg/>
      <Main/>
      <Footer/>
    </div>
    
  )
}

export default Home;