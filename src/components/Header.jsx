import React from 'react';
import { Link } from 'react-router-dom';
import logoInitials from '../assets/logo-initials.svg';

function Header() {
    return (
        <header id="masthead" className="site-header">
            <div className="logo-container">
                <Link className="logo-initials" to="/">
                    <img src={logoInitials} alt="George Fincher logo with initials" />
                </Link>
            </div>
            <div className="navigation">
                <nav>
                    <ul className="navigation-menu">
                        <li className="about-me-item nav-item">
                            <Link to="/about" id="about-me-link">
                                about me
                            </Link>
                        </li>
                        <li className="about-me-item nav-item">
                            <Link to="/portfolio" id="projects-link">
                                My Portfolio
                            </Link>
                        </li>
                        <li className="my-work nav-item">
                            <Link to="/resume" id="my-work-link">
                                My Resume
                            </Link>
                        </li>
                        <li className="contact-me-item nav-item">
                            <Link to="/contact" id="contact-me-link">
                                contact me
                            </Link>
                        </li>
                        <li className="work-resume nav-item">
                            <a
                                href="https://docs.google.com/document/d/1tEmQaS4c8bL4XMCJ6XHtqHHp7zL62VOazIOmlQnm618/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                        <nav-item />
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
