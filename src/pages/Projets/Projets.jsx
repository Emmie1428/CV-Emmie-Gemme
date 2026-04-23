import { useState, useEffect } from "react"
import { getProjetsPortfolio } from "../../API"
import "./Projets.scss"

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
        <section className="projets">
            <h1 className="projets_titre">Mes projets</h1>
            <div className="projets_cards">
                {projets.map((projet) => (
                    <div  className="projets_card" key={projet.id}>
                        <h2 className="projets_card_title">{projet.name}</h2>             
                        <img 
                            src={`/images/projets/${projet.name}.png`}
                            alt={`Preview de ${projet.name}`}
                            className="projets_card_image"
                            onError={(e) => {
                                e.target.src = "/images/projets/default.png"
                            }}
                        />
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