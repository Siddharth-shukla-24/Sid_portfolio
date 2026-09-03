import React from 'react'
import data from '../data/data.json'

function Skills() {
    const { skills, fullName } = data.data
    const iconpath = "/images/icons/"

    return (
        <section className="px-2" id="skills">
            <div className="container skill-div">
                <div className="title">
                    <p>Skills</p>
                </div>
                <div className="skill-content">
                    <div className="experience-details-container">
                        <div className="about-containers">
                            {skills.map((item, index) => (
                                <div key={index} className="details-container">
                                    <h2 className="experience-sub-title">{item.title}</h2>
                                    <div className="article-container">
                                        {item.skillname.map((skillnames, idx) => (
                                            <button key={idx} type="button" className="btn btn-lg skill-btn my-1" disabled>
                                                <img
                                                    src={iconpath + skillnames.image + ".png"}
                                                    className="skill-icon mx-2"
                                                    alt={`${skillnames.name} - ${fullName} Skills`}
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                                {skillnames.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
