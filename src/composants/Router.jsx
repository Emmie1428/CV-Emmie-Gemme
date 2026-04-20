import {Routes, Route} from "react-router-dom"
import Accueil from "../pages/Accueil"
import Projets from "../pages/Projets"
import Contact from "../pages/Contact"

function Router () {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact"  element={<Contact />} />
        </Routes>
    )
}

export default Router