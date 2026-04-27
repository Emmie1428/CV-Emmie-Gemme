import Github from "../../assets/github-logo.png"
import Linkedin from "../../assets/linkedin-logo.png"
import "./Footer.scss"

function Footer () {
    return(
        <div className="footer">
            <a href="https://github.com/Emmie1428" target="_blank">
                <img src={Github} className="footer_logo"/>
            </a>
            <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-app-tracker" target="_blank" >
                <img src={Linkedin} className="footer_logo" />
            </a>
        </div>
    )
}

export default Footer