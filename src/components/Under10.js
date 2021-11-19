import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg';
import gameImg2 from '../images/pexels-fox-1038916.jpg';
import gameImg3 from '../images/pexels-mart-production-7330764.jpg';
import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';

const Under10 = () => {
    return (
        <section className="under-10">
            <div className="section">
                <div className="under-header">
                    <h3>UNDER $10</h3>
                    <div className="under-header-btns">
                        <button className="trans-btn">Under $10</button>
                        <button className="trans-btn">Under $5</button>
                    </div>
                </div>
                <div className="under-games">
                    <button id="under-left" className="button-left arrow"><i class="fas fa-chevron-left"></i></button>
                    <button id="under-right" className="button-right arrow"><i class="fas fa-chevron-right"></i></button>
                    <div className="under-game-container">
                        <img src={gameImg1}></img>
                        <div className="under-game-footer">
                            <p>$9.99</p>
                        </div>
                    </div>
                    <div className="under-game-container">
                        <img src={gameImg2}></img>
                        <div className="under-game-footer">
                            <p>$9.99</p>
                        </div>
                    </div>
                    <div className="under-game-container">
                        <img src={gameImg3}></img>
                        <div className="under-game-footer">
                            <p>$9.99</p>
                        </div>
                    </div>
                    <div className="under-game-container">
                        <img src={gameImg4}></img>
                        <div className="under-game-footer">
                            <p>$9.99</p>
                        </div>
                    </div>
                </div>
                <div className="image-carosel">
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                </div>
            </div>
        </section>
    );
}

export default Under10;