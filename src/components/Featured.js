import gameImg1 from '../images/pexels-alexander-kovalev-3977908.jpg'

const Featured = () => {
    return (
        <section className="featured">
            <div className="section">
                <h3>FEATURED & RECOMMENDED</h3>
                <button className="button-left"><i class="fas fa-chevron-left"></i></button>
                <div className="featured-image-container">
                    <img src={gameImg1}></img>
                    <div className="featured-info">
                        <h2>Game Name</h2>
                        <img></img>
                        <img></img>
                        <img></img>
                        <img></img>
                        <h2>Now Available</h2>
                        <div className="featured-info-footer">
                            <p>$29.99</p>
                            <i>windows icon</i>
                        </div>
                    </div>
                </div>
                <button className="button-right"><i class="fas fa-chevron-right"></i></button>
                <div className="image-carosel">
                    <div className="carosel-box"></div>
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