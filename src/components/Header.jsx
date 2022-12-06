import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoInitials from '../assets/logo-initials.svg';

function Header() {
    return (
        <header id="masthead" className="site-header">
            <div className="logo-container">
                <Link className="logo-initials" to="/george-fincher-react-portfolio">
                    <img src={logoInitials} alt="George Fincher logo with initials" />
                </Link>
            </div>
            <div className="navigation">
                <nav>
                    <ul className="navigation-menu">
                        <li className="about-me-item nav-item">
                            <NavLink
                                to="/george-fincher-react-portfolio/about"
                                id="about-me-link"
                                className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
                            >
                                about me
                            </NavLink>
                        </li>
                        <li className="about-me-item nav-item">
                            <NavLink
                                to="/george-fincher-react-portfolio/portfolio"
                                id="projects-link"
                                className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
                            >
                                My Portfolio
                            </NavLink>
                        </li>
                        <li className="my-work nav-item">
                            <NavLink
                                to="/george-fincher-react-portfolio/resume"
                                id="my-work-link"
                                className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
                            >
                                My Resume
                            </NavLink>
                        </li>
                        <li className="contact-me-item nav-item">
                            <NavLink
                                to="/george-fincher-react-portfolio/contact"
                                id="contact-me-link"
                                className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}
                            >
                                contact me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
