import React from "react"
import headerLogo from "../images/trollface.png"


export default function Header() {
    return (
        <header className="header">
            <img
                src={headerLogo} className="header--logo" alt="header-pic"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">Meme Generator App with react</h4>
        </header>
    )
}