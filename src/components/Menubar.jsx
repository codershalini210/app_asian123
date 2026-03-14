import { Link } from "react-router-dom"
import "./Menubar.css"

export default function Menubar() {
    return(
        <div className="menubar">

            <div className="logo">
                <img 
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="logo"
                />
                <span>TechNova</span>
            </div>

            <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/Refeg">REF EG</Link></li> */}
            </ul>

        </div>
    )
}