import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

import data from '../data/data.json'

const Hero = () => {

    const { fullName, titleArray, subTitle, resumeLink, socialLinks } = data.data

    return (
        <section id="top" className="hero">
            <div className="container hero-shell">
                <div className="content">
                    <h4 className="eyebrow">Hello! 👋 I’m</h4>
                    <h1>{fullName}</h1>
                    <span className="typewriter">
                        <Typewriter
                            words={titleArray}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={38}
                            deleteSpeed={45}
                            delaySpeed={1000}
                        />
                    </span>
                    <p>{subTitle}</p>

                    <div className="hero-cta">
                        <a href={resumeLink} target='_blank' rel="noreferrer" className="btn work-btn btn-lg d-inline-flex align-items-center justify-content-center">See Resume</a>
                        <a href="#projects" className="btn secondary-btn btn-lg d-inline-flex align-items-center justify-content-center">View Projects</a>
                    </div>

                    <div className="hero-social">
                        {socialLinks.github && (
                            <a target='_blank' rel="noreferrer" href={socialLinks.github} aria-label="GitHub Profile">
                                <i className="fab fa-github" />
                            </a>
                        )}
                        {socialLinks.linkedin && (
                            <a target='_blank' rel="noreferrer" href={socialLinks.linkedin} aria-label="LinkedIn Profile">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        )}
                        <a href={`mailto:` + data.data.email} aria-label="Email me">
                            <i className="fas fa-envelope" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
