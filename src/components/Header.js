const Header = () => {
    return (
        <header>
            <div className="section">
                <div className="logo-container">
                    <i class="fab fa-cloudsmith"></i>
                    <h1>Myst</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">STORE</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SUPPORT</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <button><i></i>Install Myst</button>
                        <li>login</li>
                        <li>language</li>
                    </ul>
                </nav>  
            </div>
            
        </header>
    );
}

export default Header;