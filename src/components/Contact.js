import React from 'react'
import data from '../data/data.json'

const Contact = () => {
    const { contactParagraph, email, phone, location } = data.data

    return (
        <div className="contact-sec px-2" id="contact">
            <div className="container contact-div">
                <div className="title">
                    <p>Contact</p>
                </div>
                <div className="contect-content text-start">
                    <p className="mb-4" style={{ fontSize: '1.2rem' }}>{contactParagraph}</p>
                    <div className="row mt-4">
                        <div className="col-12 col-md-4 mb-3">
                            <div className="details-container p-3 text-center">
                                <i className="fas fa-envelope fa-2x mb-2" style={{ color: '#7364d0' }}></i>
                                <h5 style={{ color: '#fff', margin: '5px 0' }}>Email</h5>
                                <a href={"mailto:" + email} className="underline-link" style={{ color: '#A5B4FC', wordBreak: 'break-all' }}>
                                    {email}
                                </a>
                            </div>
                        </div>
                        {phone && (
                            <div className="col-12 col-md-4 mb-3">
                                <div className="details-container p-3 text-center">
                                    <i className="fas fa-phone fa-2x mb-2" style={{ color: '#7364d0' }}></i>
                                    <h5 style={{ color: '#fff', margin: '5px 0' }}>Phone</h5>
                                    <a href={"tel:" + phone} style={{ color: '#A5B4FC', textDecoration: 'none' }}>
                                        {phone}
                                    </a>
                                </div>
                            </div>
                        )}
                        {location && (
                            <div className="col-12 col-md-4 mb-3">
                                <div className="details-container p-3 text-center">
                                    <i className="fas fa-location-dot fa-2x mb-2" style={{ color: '#7364d0' }}></i>
                                    <h5 style={{ color: '#fff', margin: '5px 0' }}>Location</h5>
                                    <span style={{ color: '#A5B4FC' }}>{location}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
