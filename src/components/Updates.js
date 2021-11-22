import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg';
import gameImg2 from '../images/pexels-fox-1038916.jpg';
import gameImg3 from '../images/pexels-mart-production-7330764.jpg';
import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';
import gameImg5 from '../images/pexels-stas-knop-1462725.jpg';
import gameImg6 from '../images/pexels-tima-miroshnichenko-7046723.jpg';

const Updates = () => {
    return (
        <section className="updates-offers">
            <div className="section">
                <h3>UPDATES AND OFFERS</h3>
                <div className="update-games">
                    <div className="update-game-container">
                            <div id="update-grid-1" className="update-game">
                                <img src={gameImg1}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg2}></img>
                                <div className="update-game-footer">
                                    <p>Free To Play</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg3}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg4}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg5}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg6}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                            <div className="update-game">
                                <img src={gameImg1}></img>
                                <div className="update-game-footer">
                                    <p>$29.99</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Updates;