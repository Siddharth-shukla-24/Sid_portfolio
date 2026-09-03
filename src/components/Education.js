import React from 'react'
import data from '../data/data.json'

const Education = () => {
    const { education } = data.data

    if (!education || education.length === 0) return null

    return (
        <section className="px-2" id="education">
            <div className="container skill-div">
                <div className="title">
                    <p>Education</p>
                </div>
                <div className="row mt-4">
                    {education.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 mb-4">
                            <div className="details-container text-start h-100 p-4">
                                <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
                                    <h3 style={{ color: '#ffffff', fontFamily: 'koff-bold', fontSize: '1.35rem', margin: 0 }}>
                                        {item.institution}
                                    </h3>
                                    <span style={{ color: '#7364d0', fontWeight: 'bold', fontSize: '0.95rem' }}>{item.duration}</span>
                                </div>
                                <h5 style={{ color: '#a2a1a6', fontSize: '1.1rem', marginTop: '5px' }}>{item.degree}</h5>
                                <p style={{ color: '#A5B4FC', margin: 0, fontWeight: '500' }}>{item.score}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
