import axios from "axios";

const GITHUB_API = "https://api.github.com"
const USERNAME = "emmie1428"


export async function getProjetsPortfolio () {
    try {
        const reponse = await axios.get(`${GITHUB_API}/users/${USERNAME}/repo`)
        const repoPorfolio = reponse.data.filter(repo => 
            repo.topics && repo.topics.includes("portfolio"))
        return repoPorfolio    
    } catch (error) {
        console.error("Erreur lors de la récupération des projets GitHub", error.message)
    return []
    } 
}