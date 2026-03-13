import { Link } from "react-router-dom"
export default function Menubar()
{
    return(
        <div className="menubar">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">Aboutus</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link> </li>
                <li><Link to="/Refeg">REF EG</Link></li>
                </ul>
            </div>
    )
}