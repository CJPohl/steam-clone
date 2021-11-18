import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg';
import gameImg2 from '../images/pexels-fox-1038916.jpg';
import gameImg3 from '../images/pexels-mart-production-7330764.jpg';
import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';

const SpecialOffers = () => {
    return (
        <section className="special-offers">
            <div className="section">
                <div className="special-header">
                    <h3>SPECIAL OFFERS</h3>
                    <button className="trans-btn">BROWSE MORE</button>
                </div>
                <div className="special-images">
                    <button className="button-left arrow" id="special-left"><i class="fas fa-chevron-left"></i></button>
                    <button className="button-right arrow" id="special-right"><i class="fas fa-chevron-right"></i></button>
                    <div className="special-1">
                        <div className="special-image-container">
                            <img src={gameImg1}></img>
                            <div className="special-image-bottom-container-1">
                            <p>MIDWEEK MADNESS</p>
                                <div className="special-discounts">
                                    <h3>-30%</h3>
                                    <ul>
                                        <li id="strike"><strike>$19.99</strike></li>
                                        <li>$13.99</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="special-2">
                        <div className="special-image-container">
                            <img src={gameImg2}></img>
                            <div className="special-image-bottom-container-1">
                                <p>MIDWEEK MADNESS</p>
                                <div className="special-discounts">
                                    <h3>-30%</h3>
                                    <ul>
                                        <li id="strike"><strike>$19.99</strike></li>
                                        <li>$13.99</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="special-3">
                        <div className="special-image-container">
                            <img src={gameImg3}></img>
                            <div className="special-image-bottom-container-2">
                                <p>Today's deal!</p>
                                <div className="special-discounts">
                                    <h3>-30%</h3>
                                    <ul>
                                        <li id="strike"><strike>$19.99</strike></li>
                                        <li>$13.99</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="special-image-container">
                            <img src={gameImg4}></img>
                            <div className="special-image-bottom-container-2">
                                <p>Today's Deal!</p>
                                <div className="special-discounts">
                                    <h3>-30%</h3>
                                    <ul>
                                    <li id="strike"><strike>$19.99</strike></li>
                                        <li>$13.99</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             <div className="image-carosel">
                <div className="carosel-box active"></div>
                <div className="carosel-box"></div>
                <div className="carosel-box"></div>
                <div className="carosel-box"></div>
            </div>
            </div>
        </section>
    );
}

export default SpecialOffers;