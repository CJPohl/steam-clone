const Footer = () => {
    return (
        <section className="footer">
            <div className="section">
                <div className="company-info-container"> 
                    <div className="company-info">
                        <h1>DYNAM0</h1>
                        <div className="company-info-block">
                            <div className="company-info-top">
                                <p>@ 2021 Dynamo Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.</p>
                            </div>
                            <div className="company-info-bottom">
                                <ul>
                                    <p>VAT included in all prices where applicable.</p>
                                    <a href="#">Privacy Policy</a>
                                    <p> | </p>
                                    <a href="#">Legal</a>
                                    <p> | </p>
                                    <a href="#">Myst Subscriber Agreement</a>
                                    <p> | </p>
                                    <a href="#">Refunds</a>
                                    <p> | </p>
                                    <a href="#">Cookies</a>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-logo">
                            <i class="fab fa-cloudsmith"></i>
                            <p className="myst-tag">MYST</p>
                        </div>
                        
                    </div>
                    <nav className="footer-nav">
                        <ul>
                            <a href="#">About Dynamo</a>
                            <p> | </p>
                            <a href="#">Jobs</a>
                            <p> | </p>
                            <a href="#">Dynamoworks</a>
                            <p> | </p>
                            <a href="#">Dynamo Distribution</a>
                            <p> | </p>
                            <a href="#">Support</a>
                            <p> | </p>
                            <a href="#">Gift Cards</a>
                            <p> | </p>
                            <a className="footer-icon" href="#"><i className="fab fa-facebook-square"></i>Dyamno</a>
                            <p> | </p>
                            <a className="footer-icon" href="#"><i className="fab fa-twitter-square"></i>@dynamo</a>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Footer;