const NavBar = () => {
    return (
        <section className="nav-bar">
            <nav>
                <div className="nav-links">
                    <ul>
                        <li>Your Store</li>
                        <li>New & Noteworthy</li>
                        <li>Categories</li>
                        <li>Points Shop</li>
                        <li>News</li>
                        <li>Labs</li>
                    </ul>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="search"></input>
                    <a href="#">Icon</a>
                </div>
            </nav>
        </section>
    );
}

export default NavBar;