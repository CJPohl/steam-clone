const Featured = (props) => {
  const images = props.images;

  return (
    <section className="featured">
      <div className="section">
        <h3>FEATURED & RECOMMENDED</h3>
        <div className="featured-image-container">
          <button className="button-left arrow" id="featured-left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="button-right arrow" id="featured-right">
            <i className="fas fa-chevron-right"></i>
          </button>
          <img className="featured-container-left" src={images[0]}></img>
          <div className="featured-info">
            <h2>Earthcraft</h2>
            <div className="featured-images">
              <div className="featured-imgs-1">
                <img src={images[2]}></img>
                <img src={images[3]}></img>
              </div>
              <div className="featured-imgs-2">
                <img src={images[4]}></img>
                <img src={images[5]}></img>
              </div>
            </div>
            <h2 id="available">Now Available</h2>
            <div className="featured-info-footer">
              <p>$29.99</p>
              <i id="featured-windows-mobile" class="fab fa-windows"></i>
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
};

export default Featured;
