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
            <div className="upper-main">
                <NavBar />
                <Featured />
                <SpecialOffers />
                <SteamDeck />
                <BrowseSteam />  
            </div>
           <div className="lower-main">
                <GameSelector />
                <Under10 />
                <Updates />
           </div>
            <LookingFor />
            <Footer />
        </div>
    );
}

export default Main;




