const Header = () => {
  return (
    <header>
      <div className="headers section">
        <div className="mobile-sidebar">
          <i class="fas fa-align-justify"></i>
        </div>
        <div className="header-top">
          <nav className="install-nav">
            <ul>
              <button>
                <i class="fab fa-instalod"></i>Install Myst
              </button>
              <li>
                <a href="#">login</a>
              </li>
              <p> | </p>
              <li>
                <a href="#">language</a>&nbsp;<i class="fas fa-sort-down"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-bottom">
          <div className="logo-container">
            <i class="fab fa-cloudsmith"></i>
            <h1>MYST</h1>
          </div>
          <nav className="header-nav">
            <ul>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="#">COMMUNITY</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SUPPORT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
