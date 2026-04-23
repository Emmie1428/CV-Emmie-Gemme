import { Link } from "react-router"
import "./Header.scss"

function Header () {
    return (
        <nav className="navbar">
            <Link className="navbar_link" to="/">Acccueil</Link>
            <Link className="navbar_link" to="/projets">Projets</Link>
            <Link className="navbar_link" to="/contact">Contact</Link>
        </nav>
    )
}

export default Header