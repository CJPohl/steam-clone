const Under10 = (props) => {
  const images = props.images;

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
          <button id="under-left" className="button-left arrow">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button id="under-right" className="button-right arrow">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="under-game-container">
            <img src={images[0]} alt='stock'></img>
            <div className="under-game-footer">
              <p>$9.99</p>
            </div>
          </div>
          <div className="under-game-container">
            <img src={images[1]} alt='stock'></img>
            <div className="under-game-footer">
              <p>$9.99</p>
            </div>
          </div>
          <div className="under-game-container">
            <img src={images[2]} alt='stock'></img>
            <div className="under-game-footer">
              <p>$9.99</p>
            </div>
          </div>
          <div className="under-game-container">
            <img src={images[3]} alt='stock'></img>
            <div className="under-game-footer">
              <p>$9.99</p>
            </div>
          </div>
        </div>
        <div className="image-carosel">
          <div className="carosel-box active"></div>
          <div className="carosel-box"></div>
        </div>
        <div className="under-header-btns-mobile">
          <button className="trans-btn">Under $10</button>
          <button className="trans-btn">Under $5</button>
        </div>
      </div>
    </section>
  );
};

export default Under10;
