import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <div className="contact-header">
                    <h1 className="contact-title">Contact Me</h1>
                    <p className="contact-subtitle">
                        Have a project in mind or want to talk about technology?
                        I am available for new opportunities and collaborations.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* CONTACT INFO */}
                    <div className="contact-info">
                        <div className="info-item">
                            <span className="info-label">Email</span>
                            <a href="mailto:diegotercerodev@gmail.com" className="info-link">
                                diegotercerodev@gmail.com
                            </a>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Phone</span>
                            <a href="tel:+50557252091" className="info-link">
                                +505 5725 2091
                            </a>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <p className="info-text">León, Nicaragua</p>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/diego-jose-roque-tercero-644a291a2/"
                                className="social-tag"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/DiegoJoseRoque"
                                className="social-tag"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="How can I help you?" className="form-textarea" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message <span className="arrow">→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}