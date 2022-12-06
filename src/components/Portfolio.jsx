import React, { useState } from 'react';

import Project from './Project';
import PortfolioCards from './PortfolioCards';

import zenfociImg from '../assets/imgs/Screenshot-ZenFoci-Lifestyle.png';
import uoeImg from '../assets/imgs/screenshot-UOE-merch-shop.png';
import semImg from '../assets/imgs/semantic-refactor-site-image.jpg';
import passImg from '../assets/imgs/password-generator-image.jpg';
import quizImg from '../assets/imgs/code-quiz-image.jpg';
import schedImg from '../assets/imgs/day-planner-image.jpg';
import weatherImg from '../assets/imgs/weather-dashboard-image.jpg';

const projectData = [
    {
        id: 1,
        img: zenfociImg,
        altText: 'The homepage of zenfoci a lifestyle app designed to help promote healthy habits and a healthy life',
        titleFirst: 'Zen',
        titleSecond: 'Foci',
        techTags: 'HTML, CSS, Javascript, APIs',
        live: 'https://theinfamousgrim.github.io/ZenFoci-Lifestyle-App/',
        github: 'https://github.com/TheInfamousGrim/ZenFoci-Lifestyle-App',
    },
    {
        id: 2,
        img: uoeImg,
        altText: 'A university merchandise store home page',
        titleFirst: 'UOE',
        titleSecond: 'Merch',
        techTags: 'Node.js, Express, MySQL, Sequelize, ORM, MVC',
        live: 'https://fast-retreat-51072.herokuapp.com/',
        github: 'https://github.com/TheInfamousGrim/university-merch-store-fullstack-app',
    },
];

const portfolioData = [
    {
        id: 3,
        img: semImg,
        altText: 'an seo site with a header, a large hero image of a boardroom just below with content below that',
        titleFirst: 'Semantic',
        titleSecond: 'HTML',
        techTags: 'HTML, CSS',
        live: 'https://theinfamousgrim.github.io/Code-Refactor-Horiseon/',
        github: 'https://github.com/TheInfamousGrim/Code-Refactor-Horiseon',
    },
    {
        id: 4,
        img: passImg,
        altText: 'an iphone being held by a hand with a locked screen showing',
        titleFirst: 'Password',
        titleSecond: 'Generator',
        techTags: 'HTML, CSS, Javascript',
        live: 'https://theinfamousgrim.github.io/parakeet-password-generator/',
        github: 'https://github.com/TheInfamousGrim/parakeet-password-generator',
    },
    {
        id: 5,
        img: quizImg,
        altText: 'two rubix cubes stacked on top of each other that are unaligned',
        titleFirst: 'Code',
        titleSecond: 'Quiz',
        techTags: 'Javascript, DOMPurify, QuizAPI',
        live: 'https://theinfamousgrim.github.io/code-quiz-vanilla-js/',
        github: 'https://github.com/TheInfamousGrim/code-quiz-vanilla-js',
    },
    {
        id: 6,
        img: schedImg,
        altText:
            'a granite desk with an assortment of items such as a planner on a sheet of paper, a pencil and an empty mug of coffee',
        titleFirst: 'Daily',
        titleSecond: 'Planner',
        techTags: 'JavaScript, HTML, CSS',
        live: 'https://theinfamousgrim.github.io/personal-work-day-scheduler/',
        github: 'https://github.com/TheInfamousGrim/personal-work-day-scheduler',
    },
    {
        id: 7,
        img: weatherImg,
        altText:
            'A city with a sky split in two, stormy clouds with a lightning bolt on the left and blue sky on the right',
        titleFirst: 'Semantic',
        titleSecond: 'HTML',
        techTags: 'HTML, CSS',
        live: 'https://theinfamousgrim.github.io/cumulo-weather-dashboard/',
        github: 'https://github.com/TheInfamousGrim/cumulo-weather-dashboard',
    },
];

function Portfolio() {
    // Map over big projects
    const projects = projectData.map((project) => (
        <Project
            id={project.id}
            img={project.img}
            altText={project.altText}
            titleFirst={project.titleFirst}
            titleSecond={project.titleSecond}
            techTags={project.techTags}
            live={project.live}
            github={project.github}
        />
    ));

    // Map over smaller portfolio projects
    const portfolioItems = portfolioData.map((data) => (
        <PortfolioCards
            id={data.id}
            img={data.img}
            altText={data.altText}
            titleFirst={data.titleFirst}
            titleSecond={data.titleSecond}
            techTags={data.techTags}
            live={data.live}
            github={data.github}
        />
    ));

    return (
        <>
            <section className="featured-projects" id="featured-projects">
                <div className="work-title-container">
                    <h2 className="project-title-text" id="my-projects-id">
                        <span className="flame-text">My</span> Projects
                    </h2>
                </div>
                <div className="project-grid-container">{projects}</div>
            </section>
            <section className="featured-portfolio" id="featured-portfolio">
                <div className="work-title-container">
                    <h2 className="work-title-text" id="work-title-id">
                        my <span className="flame-text">work</span>
                    </h2>
                </div>
                <div className="portfolio-cards-container">{portfolioItems}</div>
            </section>
        </>
    );
}

export default Portfolio;
