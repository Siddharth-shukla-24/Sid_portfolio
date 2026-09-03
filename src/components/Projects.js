import React from 'react'
import data from '../data/data.json'

const Projects = () => {
    const { projects } = data.data
    const iconpath = "/images/icons/"
    const imgpath = "/images/projects/"

    const open = '/images/icons/open.png'
    const githubgrey = '/images/icons/github-grey.png'

    return (
        <section className="px-2" id="projects">
            <div className="container project-div">
                <div className="title">
                    <p>Featured Projects</p>
                </div>
                <div className="project">
                    {projects.map((project, index) => (
                        <div key={index} className="card shadow-lg mb-5" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                            <div className={index % 2 === 0 ? "row g-0 card-row align-items-center" : "row g-0 card-row flex-row-reverse align-items-center"}>
                                <div className="col-lg-5 p-3">
                                    {project.projectImage && project.projectImage.length > 1 ? (
                                        <div
                                            id={"project" + index}
                                            className="carousel slide"
                                            data-bs-ride="carousel"
                                        >
                                            <div className="carousel-inner rounded">
                                                {project.projectImage.map((image, id) => (
                                                    <div key={id} className={id === 0 ? "carousel-item active" : "carousel-item"}>
                                                        <img src={imgpath + image} className="d-block w-100 rounded" alt={`${project.projectName} - Project Demo`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target={"#project" + index}
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target={"#project" + index}
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <img
                                            src={imgpath + (project.projectImage ? project.projectImage[0] : "")}
                                            className="img-fluid rounded border"
                                            alt={`${project.projectName} - Project Demo`}
                                            style={{ borderColor: '#3a3a4a' }}
                                        />
                                    )}
                                </div>
                                <div className="col-lg-7">
                                    <div className="card-body p-4">
                                        <h5 className="card-title text-uppercase tracking-wider">{project.projectType}</h5>
                                        <h3 className="card-main-title">{project.projectName}</h3>
                                        <div className="tech my-3 flex-wrap">
                                            {project.techStack && project.techStack.map((item, idx) => (
                                                <span key={idx} className="tech-item me-2 mb-2">
                                                    <img
                                                        src={iconpath + item.image + ".png"}
                                                        className="skill-icon me-1"
                                                        alt={`${item.name} icon`}
                                                        onError={(e) => { e.target.style.display = 'none'; }}
                                                    />
                                                    <span className="tooltip">{item.name}</span>
                                                </span>
                                            ))}
                                        </div>
                                        <p className="card-text text-muted mb-3" style={{ fontSize: '1rem' }}>
                                            {project.description}
                                        </p>
                                        {project.highlights && project.highlights.length > 0 && (
                                            <ul className="project-highlights mb-4" style={{ color: '#a2a1a6', fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
                                                {project.highlights.map((highlight, hIdx) => (
                                                    <li key={hIdx} className="mb-1">{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className="mt-auto d-flex flex-wrap gap-2">
                                            {project.githubLink && project.githubLink.length > 0 && (
                                                <a href={project.githubLink} target="_blank" rel="noreferrer" type="button" className="btn btn-lg skill-btn">
                                                    <img src={githubgrey} className="skill-icon mx-2" alt='Github Icon' />
                                                    <span className="me-2">Source Code</span>
                                                </a>
                                            )}
                                            {project.liveLink && project.liveLink.length > 0 && (
                                                <a href={project.liveLink} target="_blank" rel="noreferrer" type="button" className="btn btn-lg skill-btn">
                                                    <img src={open} className="skill-icon mx-2" alt='Project Live Icon' />
                                                    <span className="me-2">Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
