import React, {useState} from 'react';
import "../styles/header.css";
import { menuLinks } from '../constants';

const Header = () =>  {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) {
            header.classList.add("scroll-header")
        } else {
            header.classList.remove("scroll-header")
        }
    });

    const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">DaianneB.</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                    {menuLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className="nav__item"
                    >
                        <a href={`#${nav.id}`} className="nav__link">
                            <i className={`${nav.icon} nav__icon`}></i> {nav.name}
                        </a>
                    </li>
                    ))}
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
)}

export default Header