import React from 'react'
import data from '../data/data.json'

const About = () => {
    const { fullName, aboutDescription, aboutImage } = data.data
    const imagepath = "/images/about/"

    return (
        <section className="px-2" id="about">
            <div className="container aboutdiv">
                <div className="title">
                    <p>About</p>
                </div>
                <div className="content">
                    <div className="row flex-md-row-reverse align-items-center">
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                            <img
                                src={`${imagepath}${aboutImage}?v=${Date.now()}`}
                                className="about-img img-fluid shadow-lg"
                                width={400}
                                height={400}
                                alt={`${fullName}'s headshot`}
                                style={{ borderRadius: '1rem', border: '2px solid #7364d0', objectFit: 'cover', width: '100%', maxHeight: '420px' }}
                            />
                        </div>
                        <div className="col-12 col-md-8 about-text">
                            {aboutDescription.map((sentence, idx) => (
                                <p key={idx} className="text-lg mb-3">
                                    {sentence}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
