import { Link } from "react-router"

function Header () {
    return (
        <nav>
            <Link to="/">Acccueil</Link>
            <Link to="/projets">Projets</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header