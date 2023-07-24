import React from 'react';
import { socialMedia } from '../constants';

const Social = () => (
    <div className="home__social">
        {socialMedia.map((social) => (
        <a
            key={social.id}
            href={`${social.link}`}
            className="home__social-icon"
            target="_blank" rel="noreferrer"
        >
            <i className={`${social.icon}`}></i>
        </a>
))}
    </div>
)

export default Social