import React from 'react';
import "../styles/footer.css";
import { menuLinks } from '../constants';
import { socialMedia } from '../constants';

const today = new Date();

const Footer = () => (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">DaianneB.</h1>

            <ul className="footer__list">
                {menuLinks.map((footer) =>(
                    <li key={footer.id}>
                        <a href={`#${footer.id}`} className="footer__link">{footer.name}</a>
                    </li>
                ))}
            </ul>

            <div className="footer__social">
                {socialMedia.map((social) => (
                    <a
                    key={social.id}
                    href={`${social.link}`}
                    className="footer__social-icon"
                    target="_blank" rel="noreferrer"
                >
                    <i className={`${social.icon}`}></i>
                </a>
                ))}
            </div>

            <span className="footer__copy">
            {today.getFullYear()} &#169; Daianne Bauer. All Rights Reserved.
            </span>
        </div>
    </footer>
)

export default Footer