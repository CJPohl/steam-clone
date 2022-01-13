const SteamDeck = (props) => {
  const images = props.images;

  return (
    <section className="steam-deck">
      <div className="section">
        <div className="steam-deck-images">
          <div id="myst-dock-1">
            <img src={images[3]} alt='stock'></img>
          </div>
          <div id="myst-dock-2">
            <img src={images[4]} alt='stock'></img>
            <h3>MYST DOCK</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteamDeck;
