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


const Main = () => {
    return (
        <div className="main">
            <NavBar />
            <Featured />
            <SpecialOffers />
            <SteamDeck />
            <BrowseSteam />
            <GameSelector />
            <Under10 />
            <Updates />
            <LookingFor />
            <Footer />
        </div>
    );
}

export default Main;




