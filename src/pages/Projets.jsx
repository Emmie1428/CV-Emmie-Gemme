import { useState, useEffect } from "react"
import { getProjetsPortfolio } from "../API"


function Projets () {
    const [projets, setProjets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjets = async () => {
            const data = await getProjetsPortfolio()
            setProjets(data)
            setLoading(false)
        }
        fetchProjets()
    }, [])

        if (loading) return <p>Chargement des projets...</p>
        if (projets.length === 0) return <p>Aucun projet trouvé :(</p>
    
    return (
        <section>
            <h1>Mes projets</h1>
            <div>
                {projets.map((projet) => (
                    <div key={projet.id}>
                        <h2>{projet.name}</h2>
                        <p>{projet.description || "Pas de descrition"}</p>
                        <a href={projet.html_url} target="_blank">
                            📂 Voir sur GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projets