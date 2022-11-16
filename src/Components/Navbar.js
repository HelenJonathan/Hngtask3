import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png"
import "../Styles/StylesNavbar.css"

const Navbar = () => {
    return(
        <div className="container">
            <div className="logo-wrap"><img className="logo" src={ Logo } alt="logo" /></div>
            <ul className="ul">
                <li><Link to="/" className="navitem" >Home</Link></li>
                <li><Link to="/placetostay"  className="navitem" >Place to stay</Link></li>
                <li><Link to="#" className="navitem" >NFTs</Link></li>
                <li><Link to="#" className="navitem" >Community</Link></li>
            </ul>
            <div className="button-wrap" >
                <button><Link to="/connect" className="connect">Connect Wallet</Link> </button>
            </div>
        </div>
    )
}

export default Navbar;