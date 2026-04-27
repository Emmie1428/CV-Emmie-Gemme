import { PROFIL_INTRO, EXPE_PRO, FORMATION } from "../../datas/profil"
import "./Accueil.scss"

function Accueil () {
    return (
        <section>
            <div className="profil">
                <img className="profil_photo"src={`${PROFIL_INTRO.photo}`} alt={`Photo de profil de ${PROFIL_INTRO.nom}`} style={{"width": "150px", "height": "200px"}}/>
                <div className="profil_info">
                    <h1 className="profil_info_title">{`${PROFIL_INTRO.nom}`}</h1>
                    <h2>{`${PROFIL_INTRO.metier}`}</h2>
                    <p className="profil_info_text">{`${PROFIL_INTRO.apropos}`}</p>
                </div>
            </div>
            <div className="expe-pro">
                <h2>Expériences professionnelles</h2>
                {EXPE_PRO.map((expe, index) => (
                    <li key={index} className="expe-pro_list">
                        <h3>{`${expe.titre}`}</h3>
                        <p className="dates">{`${expe.temps}`}</p>
                        <p>{`${expe.description}`}</p>
                    </li>
                ))}
            </div>
            <div className="formations">
                <h2>Formations</h2>
                {FORMATION.map((formation, index) => (
                    <li key={index} className="formations_list">
                        <h3>{`${formation.titre}`}</h3>
                        <p className="formations_list_ecole">{`${formation.ecole}`}</p>
                        <p className="dates" >{`${formation.temps}`}</p>
                    </li>
                ))}
            </div>
        </section>
    )
}

export default Accueil