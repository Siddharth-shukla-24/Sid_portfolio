import React from 'react'
import data from '../data/data.json'

const Footer = () => {
    const { socialLinks, fullName } = data.data

    return (
        <div className="footer-section px-2">
            <hr />
            <div className="container mb-3">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} - Built with ❤️ and ☕ by <span style={{ color: '#7364d0', fontWeight: 'bold' }}>{fullName}</span> 😊
                </p>
                <div className="footer-social">
                    <ul className="social-icons">
                        {socialLinks.linkedin && (
                            <li><a target='_blank' rel="noreferrer" href={socialLinks.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                        )}
                        {socialLinks.github && (
                            <li><a target='_blank' rel="noreferrer" href={socialLinks.github} aria-label="GitHub"><i className="fab fa-github"></i></a></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
