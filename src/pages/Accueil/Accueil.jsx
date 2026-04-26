import { PROFIL_INTRO, EXPE_PRO, FORMATION } from "../../datas/profil"

function Accueil () {
    return (
        <section>
            <div>
                <h1>{`${PROFIL_INTRO.nom}`}</h1>
                <h2>{`${PROFIL_INTRO.métier}`}</h2>
                <p>{`${PROFIL_INTRO.apropos}`}</p>

            </div>
            <img sr={`${PROFIL_INTRO.photo}`} alt={`Photo de profil de ${PROFIL_INTRO.nom}`} />
        </section>
    )
}

export default Accueil