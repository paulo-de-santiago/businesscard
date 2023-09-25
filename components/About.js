import React from "react"

export default function About() {
    return (
        <header className="header">
            <img src="../images/Paulo22.jpg" className="header--img"/>
            <div className="div-h">
                <h1 className="header--h1">Paulo Santiago</h1>
                <h3 className="header--h3">Frontend Developer</h3>
            </div>
            <a href="https://portfolio-paulo-de-santiago.netlify.app/" target="_blank" className="header--portfolio">Portfolio</a>
             <div className="header--links">
                <a className="anchor--email" id="img-email" title="XXX" href = "mailto:pauloecsantiago@gmail.com?subject = Feedback&body = Message" >
                    <span>
                    <img className="links--img_email" id="img-email" src="../images/Mail.png" />
                    </span>
                    <span>email</span>
                </a>
                
                
                <a className="anchor--linkedin" id="linkedin-img" href="https://www.linkedin.com/in/pauloecsantiago/">
                    <span>
                    <img className="links--img_linkedin" id="linkedin-img" src="../images/linkedin.png"/>
                    </span>
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>

    )
}