import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg';
import gameImg2 from '../images/pexels-fox-1038916.jpg';
import gameImg3 from '../images/pexels-mart-production-7330764.jpg';
import gameImg4 from '../images/pexels-stas-knop-1298601.jpg';
import gameImg5 from '../images/pexels-stas-knop-1462725.jpg';

const Featured = () => {
    return (
        <section className="featured">
            <div className="section">
                <h3>FEATURED & RECOMMENDED</h3>
                <div className="featured-image-container">
                    <button className="button-left arrow" id="featured-left"><i class="fas fa-chevron-left"></i></button>
                    <button className="button-right arrow" id="featured-right"><i class="fas fa-chevron-right"></i></button>
                    <img className="featured-container-left" src={gameImg1}></img>
                    <div className="featured-info">
                        <h2>Earthcraft</h2>
                        <div className="featured-images">
                            <div className="featured-imgs-1">
                                <img src={gameImg2}></img>
                                <img src={gameImg3}></img>
                            </div>
                            <div className="featured-imgs-2">
                                <img src={gameImg4}></img>
                                <img src={gameImg5}></img>
                            </div>
                        </div>
                        <h2 id="available">Now Available</h2>
                        <div className="featured-info-footer">
                            <p>$29.99</p>
                            <i class="fab fa-windows"></i>
                        </div>
                    </div>
                </div>
                <div className="image-carosel">
                    <div className="carosel-box active"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                    <div className="carosel-box"></div>
                </div>
            </div>
        </section>
    );
}

export default Featured;