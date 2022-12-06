import React from 'react';

function Resume() {
    return (
        <div className="resume-page-container">
            <div className="resume-container">
                <h1>Resumé</h1>
                <a
                    href="https://docs.google.com/document/d/1tEmQaS4c8bL4XMCJ6XHtqHHp7zL62VOazIOmlQnm618/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-container__link btn-general"
                >
                    <i className="fa-solid fa-download" /> Download
                </a>
            </div>
            <div className="skills-container">
                <h1 className="skills-container__main-title">Skills</h1>
                <div className="skills-container__languages-frameworks">
                    <h2>Languages & Frameworks</h2>
                    <div className="languages-frameworks__icons devicons">
                        <i className="devicon-javascript-plain colored" />
                        <i className="devicon-css3-plain-wordmark colored" />
                        <i className="devicon-sass-original colored" />
                        <i className="devicon-bootstrap-plain-wordmark colored" />
                        <i className="devicon-html5-plain-wordmark colored" />
                        <i className="devicon-react-original-wordmark colored" />
                        <i className="devicon-jquery-plain-wordmark colored" />
                        <i className="devicon-nodejs-plain-wordmark colored" />
                        <i className="devicon-express-original-wordmark" />
                        <i className="devicon-mongodb-plain-wordmark colored" />
                        <i className="devicon-mysql-plain-wordmark colored" />
                        <i className="devicon-sequelize-plain-wordmark colored" />
                    </div>
                </div>
                <div className="skills-container__tools">
                    <h2>Tools & Technologies</h2>
                    <div className="tools__icons devicons">
                        <i className="devicon-vscode-plain colored" />
                        <i className="devicon-git-plain colored" />
                        <i className="devicon-github-original-wordmark" />
                        <i className="devicon-npm-original-wordmark colored" />
                        <i className="devicon-jest-plain colored" />
                        <i className="devicon-heroku-plain colored" />
                        <i className="devicon-webpack-plain colored" />
                    </div>
                </div>
                <div className="skills-container__design">
                    <h2>Design</h2>
                    <div className="design__icons devicons">
                        <i className="devicon-figma-plain colored" />
                        <i className="devicon-illustrator-plain colored" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
