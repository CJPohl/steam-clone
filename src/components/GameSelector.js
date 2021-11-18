import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg';
import gameImg2 from '../images/pexels-fox-1038916.jpg';
import gameImg3 from '../images/pexels-mart-production-7330764.jpg';
import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';
import gameImg5 from '../images/pexels-stas-knop-1462725.jpg';
import gameImg6 from '../images/pexels-tima-miroshnichenko-7046723.jpg';

const GameSelector = () => {
    return (
        <section className="game-selector">
            <div className="section">
                <nav className="game-selector-nav">
                    <ul>
                       <a id="selected" href="#">New & Trending</a>
                       <a href="#">Top Sellers</a>
                       <a href="#">Popular Upcoming</a>
                       <a href="#">Specials</a>
                    </ul>
                </nav>
                <div className="game-selector-container">
                    <div className="game-selector-spacer">
                        <p>See more:</p>
                        <button className="trans-btn">New Releases</button>
                    </div>
                    <div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg1}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg2}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg3}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li id="strike"><strike>$19.99</strike></li>
                                <li>$13.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg4}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg5}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li id="strike"><strike>$19.99</strike></li>
                                <li>$13.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg6}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg1}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg2}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg3}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li>$19.99</li>
                            </ul>
                        </div>
                    </div><div className="games-container">
                        <div className="game-selector-game">
                            <img src={gameImg4}></img>
                            <div className="game-info-left">
                                <h5>Game Name</h5>
                                <i class="fab fa-windows"></i>
                                <p>Genre, genre, genre</p>
                            </div>
                            <div className="game-discount"><p>-33%</p></div>
                            <ul>
                                <li id="strike"><strike>$19.99</strike></li>
                                <li>$13.99</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameSelector;