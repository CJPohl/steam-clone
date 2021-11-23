import React, { useState } from "react";

import NavBar from "./NavBar";
import Featured from "./Featured";
import SpecialOffers from "./SpecialOffers";
import SteamDeck from "./SteamDeck";
import BrowseSteam from "./BrowseSteam";
import GameSelector from "./GameSelector";
import Under10 from "./Under10";
import Updates from "./Updates";
import LookingFor from "./LookingFor";
import Footer from "./Footer";

import gameImg1 from "../images/pexels-alexander-kovalev-3977908.jpg";
import gameImg2 from "../images/pexels-fox-1038916.jpg";
import gameImg3 from "../images/pexels-mart-production-7330764.jpg";
import gameImg4 from "../images/pexels-stas-knop-1298601.jpg";
import gameImg5 from "../images/pexels-stas-knop-1462725.jpg";
import gameImg6 from "../images/pexels-tima-miroshnichenko-7046723.jpg";

const Main = () => {
  // images to be passed down as props
  const [images] = useState([
    gameImg1,
    gameImg2,
    gameImg3,
    gameImg4,
    gameImg5,
    gameImg6,
  ]);

  return (
    <div className="main">
      <div className="upper-main">
        <NavBar />
        <Featured images={images} />
        <SpecialOffers images={images} />
        <SteamDeck images={images} />
        <BrowseSteam />
      </div>
      <div className="lower-main">
        <GameSelector images={images} />
        <Under10 images={images} />
        <Updates images={images} />
      </div>
      <LookingFor />
      <Footer />
    </div>
  );
};

export default Main;
