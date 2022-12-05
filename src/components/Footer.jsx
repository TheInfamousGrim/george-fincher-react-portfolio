import React from 'react';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';
import twitterLogo from '../assets/twitter-logo.svg';
import whiteLogo from '../assets/logos/white-logo.svg';
import spotifyLogo from '../assets/spotify-logo.svg';

const Footer = () => (
    <footer className="site-footer" id="contact-me-section">
        <div className="footer-content-container">
            <div className="contact-section">
                <div id="contact-me-link">
                    <h3>contact info</h3>
                </div>
                <div className="email-link-container">
                    <a href="mailto:finchergeorge1@gmail.com" className="email-link">
                        finchergeorge1@gmail.com
                    </a>
                </div>
                <div className="socials-logos">
                    <div className="github-link-container">
                        <a href="https://github.com/TheInfamousGrim" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="github logo" />
                        </a>
                    </div>
                    <div className="linkedin-link-container">
                        <a
                            href="https://www.linkedin.com/in/george-fincher-aa7869214/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedinLogo} alt="linkedin logo" />
                        </a>
                    </div>
                    <div className="twitter-link-container">
                        <a href="https://twitter.com/VaporWhy" target="_blank" rel="noopener noreferrer">
                            <img src={twitterLogo} alt="twitter logo" />
                        </a>
                    </div>
                    <div className="spotify-link-container">
                        <a href="https://open.spotify.com/user/11133422812" target="_blank" rel="noopener noreferrer">
                            <img src={spotifyLogo} alt="spotify logo" />
                        </a>
                    </div>
                </div>
                <div className="phone-number-container">
                    <p className="number-text">Mobile: +44 7741 249 222</p>
                </div>
            </div>
            <div className="white-logo-link-container">
                <a href="https://theinfamousgrim.github.io/george-fincher-web-portfolio/" className="home-link">
                    <img
                        src={whiteLogo}
                        alt="an inverted escher like triangle made up of prisms"
                        className="white-logo-svg"
                    />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
