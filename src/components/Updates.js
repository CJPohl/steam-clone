const Updates = (props) => {
  const images = props.images;

  return (
    <section className="updates-offers">
      <div className="section">
        <h3>UPDATES AND OFFERS</h3>
        <div className="update-games">
          <div className="update-game-container">
            <div id="update-grid-1" className="update-game">
              <img src={images[0]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[1]} alt='stock'></img>
              <div className="update-game-footer">
                <p>Free To Play</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[2]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[3]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[4]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[5]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
            <div className="update-game">
              <img src={images[0]} alt='stock'></img>
              <div className="update-game-footer">
                <p>$29.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
