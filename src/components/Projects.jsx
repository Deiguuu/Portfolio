import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                <div className="projects-header">
                    <h1 className="projects-title">My Projects</h1>
                    <p className="projects-subtitle">
                        A selection of my most recent works where visual design meets technical functionality.
                    </p>
                </div>

                <div className="projects-grid">

                    {/* PROJECT 1: ASISMED ULSA */}
                    <article className="project-card">
                        <div className="project-image-container">
                            <img src="src/assets/asismed-mockup.png" alt="ASISMED ULSA" className="project-img" />
                            <div className="project-image-placeholder">
                                <span className="placeholder-text">ASISMED ULSA · [UX/UI Mockup]</span>
                            </div>
                        </div>

                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag tag-design">UX/UI Design</span>
                                <span className="tag tag-brand">Figma</span>
                                <span className="tag tag-dev">Illustrator</span>
                            </div>
                            <h3 className="project-name">ASISMED ULSA</h3>
                            <p className="project-description">
                                I led the interface design and visual identity for this institutional medical system.
                                Using <strong>Figma and Illustrator</strong>, I created an optimized workflow to streamline the
                                consultation process at the university.
                            </p>
                            <a href="#" className="project-link">Explore design <span className="arrow">→</span></a>
                        </div>
                    </article>

                    {/* PROJECT 2: ECOLLECTA */}
                    <article className="project-card">
                        <div className="project-image-container">
                            <img src="src/assets/ecollecta-mockup.jpg" alt="Ecollecta App" className="project-img" />
                            <div className="project-image-placeholder">
                                <span className="placeholder-text">Ecollecta · [React Native App]</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag tag-design">UX/UI Design</span>
                                <span className="tag tag-dev">React Native</span>
                            </div>
                            <h3 className="project-name">Ecollecta</h3>
                            <p className="project-description">
                                A cross-platform mobile application that <strong>gamifies university botanical exploration</strong>.
                                It allows users to collect plant species data through QR scanning, transforming learning into an interactive experience.
                            </p>
                            <a
                                href="https://www.figma.com/proto/RLfK6gRHwQ1uoNOU2RV4XT/TreeDex?node-id=89-1227&t=eQhCjZENwoqgdmmn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=60%3A1396&show-proto-sidebar=1"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View App <span className="arrow">→</span>
                            </a>
                        </div>
                    </article>

                    {/* PROJECT 3: COSMO */}
                    <article className="project-card">
                        <div className="project-image-container">
                            <img src="src/assets/cosmo-mockup.png" alt="Cosmo App" className="project-img" />
                            <div className="project-image-placeholder">
                                <span className="placeholder-text">03. Cosmo · [AI & Desktop App]</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag tag-dev">Python / TensorFlow</span>
                                <span className="tag tag-brand">Figma</span>
                            </div>
                            <h3 className="project-name">Cosmo: Virtual Assistant</h3>
                            <p className="project-description">
                                I designed in <strong>Figma</strong> and developed an AI software using <strong>Python and TensorFlow</strong> capable of controlling Windows via voice commands.
                                It manages the PC, opens applications, and performs web searches using natural language processing.
                            </p>
                            <a
                                href="https://www.figma.com/proto/1tHIZoAyGSbF40FDUP5O3z/COSMO-ASSISTANT?node-id=42-373&p=f&t=VLYD3SscKLACSJEH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View prototype <span className="arrow">→</span>
                            </a>
                        </div>
                    </article>

                    {/* PROJECT 4: COUNTER CALCULATOR */}
                    <article className="project-card">
                        <div className="project-image-container">
                            <img src="src/assets/contadores-mockup.png" alt="Counter Calculator" className="project-img" />
                            <div className="project-image-placeholder">
                                <span className="placeholder-text">04. Digital Counter · [React JS]</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag tag-dev">React</span>
                                <span className="tag tag-logic">Digital Logic</span>
                            </div>
                            <h3 className="project-name">Counter Calculator</h3>
                            <p className="project-description">
                                Advanced tool developed in <strong>React</strong> for automating calculations and generating graphs for <strong>synchronous and asynchronous counters</strong>.
                                It optimizes the resolution of complex exercises through dynamic visualization of states and logical transitions.
                            </p>
                            <a
                                href="https://v0-calculadora-de-contadores.vercel.app/"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View calculator <span className="arrow">→</span>
                            </a>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}