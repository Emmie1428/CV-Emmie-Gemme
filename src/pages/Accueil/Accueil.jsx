import { PROFIL_INTRO, EXPE_PRO, FORMATION } from "../../datas/profil"

function Accueil () {
    return (
        <section>
            <div>
                <h1>{`${PROFIL_INTRO.nom}`}</h1>
                <h2>{`${PROFIL_INTRO.metier}`}</h2>
                <p>{`${PROFIL_INTRO.apropos}`}</p>
                <img src={`${PROFIL_INTRO.photo}`} alt={`Photo de profil de ${PROFIL_INTRO.nom}`} style={{"width": "150px", "height": "200px"}}/>
            </div>
            <div>
                {EXPE_PRO.map((expe, index) => (
                    <div key={index}>
                        <h3>{`${expe.titre}`}</h3>
                        <h4>{`${expe.temps}`}</h4>
                        <p>{`${expe.description}`}</p>
                    </div>
                ))}
            </div>
            <div>
                {FORMATION.map((formation, index) => (
                    <div key={index}>
                        <h3>{`${formation.titre}`}</h3>
                        <h4>{`${formation.ecole}`}</h4>
                        <p>{`${formation.temps}`}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Accueil