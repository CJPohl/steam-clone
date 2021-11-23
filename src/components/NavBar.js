import Sidebar from "./Sidebar";

const NavBar = () => {
  return (
    <section>
      <div className="nav-bar section">
        <Sidebar />
        <nav>
          <div className="nav-links">
            <ul>
              <button>Your Store</button>
              <button>New & Noteworthy</button>
              <button>Categories</button>
              <button>Points Shop</button>
              <button>News</button>
              <button>Labs</button>
            </ul>
          </div>
          <div className="nav-search">
            <input type="text" placeholder="search"></input>
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
