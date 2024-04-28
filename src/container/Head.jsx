import React from "react";
import me from "../assets/me.jpg"

export default function Header() {
    return (
        <>
            <img src={me} alt="A picture of myself" className="header--picture" />
            <h1 className="header--name">Adel Ashraf </h1>
            <p className="header--title">Frontend React.js developer</p>
            <p className="header--website"><a href="#" className="header--website" target="_blank">www.abc.com</a></p>
            <div className="btns-group">
                <a href="therealstark13@gmail.com" className="header--email_btn" target="_blank"><button><i class="fa-solid fa-envelope fa-beat"></i>&nbsp;&nbsp;Email</button></a>
                <a href="https://www.linkedin.com/in/adel-ashraf-3a9445231/" className="header--linkedin_btn" target="_blank"><button><i class="fa-brands fa-linkedin fa-beat"></i>&nbsp;&nbsp;LinkedIn</button></a>
            </div>
        </>
    )
}