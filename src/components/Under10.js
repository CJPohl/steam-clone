const Under10 = () => {
    return (
        <section className="under-10">
            <div className="under-header">
                <h3>Under $10</h3>
                <div className="under-header-btns">
                    <button className="trans-btn">Under $10</button>
                    <button className="trans-btn">Under $5</button>
                </div>
            </div>
            <button className="button-left"></button>
            <div className="under-games">
                <div className="under-game-container">
                    <img></img>
                    <div className="under-game-footer">
                        <p>$9.99</p>
                    </div>
                </div>
                <div className="under-game-container">
                    <img></img>
                    <div className="under-game-footer">
                        <p>$9.99</p>
                    </div>
                </div>
                <div className="under-game-container">
                    <img></img>
                    <div className="under-game-footer">
                        <p>$9.99</p>
                    </div>
                </div>
                <div className="under-game-container">
                    <img></img>
                    <div className="under-game-footer">
                        <p>$9.99</p>
                    </div>
                </div>
            </div>
            <button className="button-right"></button>
            <div className="image-carosel">
                <div className="carosel-box"></div>
                <div className="carosel-box"></div>
            </div>
        </section>
    );
}

export default Under10;