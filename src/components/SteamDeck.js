import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';
import gameImg5 from '../images/pexels-stas-knop-1462725.jpg';

const SteamDeck = () => {
    return (
        <section className="steam-deck">
            <div className="section">
                <div className="steam-deck-images">
                    <h3>MYST <span>DOCK</span></h3>
                    <img src={gameImg4}></img>
                    <img src={gameImg5}></img>
                </div>
            </div>
        </section>
    );
}

export default SteamDeck;