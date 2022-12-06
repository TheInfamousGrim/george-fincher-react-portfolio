import React from 'react';

function Project(props) {
    return (
        <div className={`${props.id} project-cards-container`}>
            <img src={props.img} alt={props.altText} className="general-card-img" />
            <div className="main-card-title-container general-card-title portfolio-cards-general-container">
                <h2 className="main-card-heading">
                    <span className="black-olive-text">{props.titleFirst} </span>
                    {props.titleSecond}
                </h2>
                <p className="main-card-tech-descriptor">{props.techTags}</p>
            </div>
            <a className="project__live-application-link" href={props.live} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-rocket" />
            </a>
            <a href={props.github} className="project__github-repo-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" />
            </a>
        </div>
    );
}

export default Project;
