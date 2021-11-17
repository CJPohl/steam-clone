const Featured = () => {
    return (
        <section className="featured">
            <h3>FEATURED & RECOMMENDED</h3>
            <button className="button-left"></button>
            <div className="featured-image-container">
                <img alt="asdlkfj"></img>
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
            <button className="button-right"></button>
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
        </section>
    );
}

export default Featured;