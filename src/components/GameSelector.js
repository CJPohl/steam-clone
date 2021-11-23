const GameSelector = (props) => {
  const images = props.images;

  return (
    <section className="game-selector">
      <div className="section">
        <nav className="game-selector-nav">
          <ul>
            <a id="selected" href="#">
              New & Trending
            </a>
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
              <img src={images[0]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[1]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[2]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li id="strike">
                  <strike>$19.99</strike>
                </li>
                <li>$13.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[3]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[4]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li id="strike">
                  <strike>$19.99</strike>
                </li>
                <li>$13.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[5]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[0]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[1]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[2]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li>$19.99</li>
              </ul>
            </div>
          </div>
          <div className="games-container">
            <div className="game-selector-game">
              <img src={images[3]}></img>
              <div className="game-info-left">
                <h5>Game Name</h5>
                <i class="fab fa-windows"></i>
                <p>Genre, genre, genre</p>
              </div>
              <div className="game-discount">
                <p>-33%</p>
              </div>
              <ul>
                <li id="strike">
                  <strike>$19.99</strike>
                </li>
                <li>$13.99</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSelector;
