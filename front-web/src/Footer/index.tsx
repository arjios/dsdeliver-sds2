import React from 'react';

import "./styles.css";

import { ReactComponent as YouTube } from "./youtube.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Instagram } from "./instagram.svg";

const Footer = () => {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="http://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTube />
                </a>
                <a href="http://www.linkedin.com/school/devduperior" target="_new">
                    <Linkedin />
                </a>
                <a href="http://www.instagram.com/devduperior.ig" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
   );
}

export default Footer;