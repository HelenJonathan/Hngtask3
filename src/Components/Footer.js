import React from "react";
import "../Styles/StylesFooter.css"
import Footerlogo from "../Images/footerlogo.png";
import Facebook from "../Images/facebook.png";
import Instagram from "../Images/instagram.png";
import Twitter from "../Images/twitter.png";
import Copyright from "../Images/copyright.png";


const Footer =() => {
    return (
        <div className="footer-container">
            <div>
                <img src={ Footerlogo } alt="footerlogo" className="footerlogo footer-general" />
                <ul  className="footer-general">
                    <li><img src={Facebook} alt="facebook" /></li>
                    <li><img src={Instagram} alt="instagram" /></li>
                    <li><img src={Twitter} alt="twitter" /></li>
                </ul>
                <div className="copyright-section footer-general">
                    <img src={Copyright} alt="copyright" />
                    <p>2022 Metabnb</p>
                </div>
            </div>
            <div className="footer-section footer-general">
                <h3 className="footer-general">Community</h3>
                <p className="footer-general">NFT</p>
                <p className="footer-general">Tokens</p>
                <p className="footer-general">Landlords</p>
                <p className="footer-general">Discord</p>
            </div>
            <div className="footer-section">
                <h3 className="footer-general">Places</h3>
                <p className="footer-general">Castle</p>
                <p className="footer-general">Farms </p>
                <p className="footer-general">Beach</p>
                <p className="footer-general">Learn more</p>
            </div>
            <div className="footer-section">
                <h3 className="footer-general">About us</h3>
                <p className="footer-general">Road map</p>
                <p className="footer-general">Creators </p>
                <p className="footer-general">Career</p>
                <p className="footer-general">Contact us</p>
            </div>
        </div>
    )
}

export default Footer;