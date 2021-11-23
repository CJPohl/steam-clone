const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <i class="fab fa-cloudsmith"></i>
                <h1>MYST</h1>
            </div>
            <div className="sidebar-div">
                <h3>GIFT CARDS</h3>
                <a href="#">Now Available on Myst</a>
            </div>
            <div className="sidebar-div">
                <h3>RECOMMENDED</h3>
                <a href="#">By Friends</a>
                <a href="#">By Curators</a>
                <a href="#">Tags</a>
            </div>
            <div className="sidebar-div">
                <h3>DISCOVERY QUEUES</h3>
                <a href="#">Recommendations</a>
                <a href="#">New Releases</a>
            </div>
            <div className="sidebar-div">
                <h3>BROWSE CATEGORIES</h3>
                <a href="#">Top Sellers</a>
                <a href="#">New Releases</a>
                <a href="#">Upcoming</a>
                <a href="#">Specials</a>
                <a href="#">Virtual Reality</a>
                <a href="#">Controller Friendly</a>
            </div>
            <div className="sidebar-div">
                <h3>BROWSE BY GENRE</h3>
                <a href="#">Free to Play</a>
                <a href="#">Early Access</a>
                <a href="#">Action</a>
                <a href="#">Adventure</a>
                <a href="#">Casual</a>
                <a href="#">Indie</a>
                <a href="#">Massively Multiplayer</a>
                <a href="#">Racing</a>
                <a href="#">RPG</a>
                <a href="#">Simulation</a>
                <a href="#">Sports</a>
                <a href="#">Strategy</a>
            </div>
            <div className="sidebar-div">
                <h3>RECENTLY VIEWED</h3>
                <a href="#">Viewed Game 1</a>
                <a href="#">Viewed Game 2</a>
                <a href="#">Viewed Game 3</a>
                <a href="#">Viewed Game 4</a>
                <a href="#">Viewed Game 5</a>
                <a href="#">Viewed Game 6</a>
            </div>
        </aside>
    );
}

export default Sidebar;