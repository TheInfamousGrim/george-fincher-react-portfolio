import React from 'react';
import Header from './Header';
import Footer from './Footer';
import profilePic from '../assets/Headshot_2020.jpg';

function About() {
    return (
        <>
            <section className="hero-img-section fade-in" id="hero-img-section">
                <div className="hero-img-container">
                    <img
                        src={profilePic}
                        alt="a head shot showing a curly haired man from the shoulders up."
                        className="headshot-img"
                    />
                    <h1 className="hero-img-title">george fincher web development</h1>
                </div>
            </section>
            <section className="about-me-section" id="about-me-section">
                <div className="slogan-bubble-container">
                    <h2 className="slogan-text">
                        elegant <span className="pale-silver-text">sites </span>
                        <span className="black-olive-text">programmed </span> with
                        <span className="eerie-black-text"> ease</span>
                    </h2>
                </div>
                <div className="about-me-content-container">
                    <div className="about-me-title-container">
                        <h2 className="about-me-title-text">
                            about <span className="flame-text">me</span>
                        </h2>
                    </div>
                    <div className="about-me-text-container">
                        <p>
                            I have accrued a number of skills over the years. I went to university initially to study a
                            masters in physics & came out with a bachelors in film and drama and then went on achieve an
                            MFA in acting at Guildford School of Acting.
                        </p>
                        <p>
                            The pandemic made me rethink the path I was treading, so I got three separate jobs in the
                            midst of the pandemic & with determination ventured back into the realm of programming.
                        </p>
                        <p>
                            I began my journey into programming in 2020, with my first attempt at learning python. I
                            gave up after a few months due to the 80 hour work weeks and lack of free time.
                        </p>
                        <p>
                            In 2021 I realized I needed a goal, so I swapped languages to HTML, CSS & Javascript so that
                            I could build web applications & fuel my learning with the dream of becoming a web
                            developer.
                        </p>
                        <p>
                            2022 came around and I was still no closer to becoming a web developer. So I did what I
                            thought was the best thing, I enrolled at a boot camp at the University of Birmingham and
                            that lead me to this moment
                        </p>
                        <p>
                            I hope you enjoy my work and if you'd like to get in touch with me, feel free to email me or
                            get in contact through one of my socials.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
