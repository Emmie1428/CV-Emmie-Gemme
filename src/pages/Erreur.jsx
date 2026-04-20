import { Link } from "react-router"

function Erreur () {
    return (
        <div>
            <h1>Erreur 404</h1>
            <p>Oups! Cette page est introuvable</p>
            <Link to="/"><button>Retour à l'acceuil</button></Link>
        </div>
    )
}

export default Erreur