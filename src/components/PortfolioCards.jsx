import React from 'react';

export default function PortfolioCards(props) {
    return (
        <div className="main-card-container portfolio-cards-general-container">
            <img src={props.img} alt={props.alt} className="general-card-img" />
            <div className="main-card-title-container general-card-title" id="general-card-title-id">
                <h2 className="main-card-heading" id="general-card-heading-id">
                    <span className="black-olive-text">{props.titleFirst} </span>
                    {props.titleSecond}
                </h2>
                <p className="main-card-tech-descriptor">{props.techTags}</p>
            </div>
            <a className="portfolio-cards__deployed-link" href={props.live} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-rocket" />
            </a>
            <a href={props.github} className="portfolio-cards__github-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" />
            </a>
        </div>
    );
}
