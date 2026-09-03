import React from 'react'
import data from '../data/data.json'

const Experience = () => {
    const { leadership, certifications } = data.data

    return (
        <section className="px-2" id="experience">
            <div className="container skill-div">
                <div className="title">
                    <p>Leadership & Certifications</p>
                </div>
                <div className="row mt-4">
                    {/* Leadership Column */}
                    <div className="col-12 col-lg-7 mb-4">
                        <h2 className="experience-sub-title text-start">Leadership</h2>
                        {leadership && leadership.map((item, index) => (
                            <div key={index} className="details-container text-start p-4 mb-3">
                                <div className="d-flex justify-content-between align-items-start flex-wrap">
                                    <div>
                                        <h3 style={{ color: '#ffffff', fontFamily: 'koff-bold', fontSize: '1.4rem', margin: 0 }}>
                                            {item.role}
                                        </h3>
                                        <h5 style={{ color: '#7364d0', fontSize: '1.1rem', marginTop: '4px' }}>
                                            {item.organization}
                                        </h5>
                                    </div>
                                    <span style={{ color: '#A5B4FC', fontWeight: 'bold' }}>{item.period}</span>
                                </div>
                                <ul className="mt-3 mb-0" style={{ color: '#a2a1a6', paddingLeft: '1.2rem' }}>
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx} className="mb-2">{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div className="col-12 col-lg-5 mb-4">
                        <h2 className="experience-sub-title text-start">Certifications</h2>
                        {certifications && certifications.map((cert, index) => (
                            <div key={index} className="details-container text-start p-4 mb-3 d-flex align-items-center">
                                <div className="me-3" style={{ fontSize: '2rem', color: '#7364d0' }}>
                                    <i className="fas fa-certificate" />
                                </div>
                                <div>
                                    <h4 style={{ color: '#ffffff', fontFamily: 'koff-bold', fontSize: '1.15rem', margin: 0 }}>
                                        {cert.title}
                                    </h4>
                                    <span style={{ color: '#a2a1a6', fontSize: '0.95rem' }}>{cert.issuer}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
