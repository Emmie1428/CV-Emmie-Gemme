/*Récupération des projets aillant le tag "portfolio" via GitHub API*/

import axios from "axios";

const GITHUB_API = "https://api.github.com"
const USERNAME = "emmie1428"
const API_VERSION = "2026-03-10"

const githubApi = axios.create({
    baseURL: GITHUB_API,
    headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": API_VERSION,
    }
})

export async function getProjetsPortfolio () {
    try {
        const reponse = await githubApi.get(`/users/${USERNAME}/repos`, {
            params: {
                per_page: 50, 
                sort: "updated",
                direction: "desc",
                type: "public"
            }
        })
        const projets = reponse.data.filter(
          (repo) => repo.topics && repo.topics.includes("portfolio")
        )   
        return projets
    } catch (error) {
        console.error("Erreur lors de la récupération des projets GitHub", error.message)
    return []
    } 
}