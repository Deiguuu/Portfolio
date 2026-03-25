import React from 'react';
import './Skills.css';

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">

                <div className="skills-header">
                    <h1 className="skills-title">My Skills</h1>
                    <p className="skills-subtitle">
                        My technical stack is divided into two worlds: functional aesthetics and robust logic.
                    </p>
                </div>

                <div className="skills-content">
                    <div className="skills-grid">

                        {/* FIGMA */}
                        <div className="skill-item" title="Figma">
                            <div className="skill-icon-box figma-box">
                                <img
                                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                                    alt="Figma"
                                    className="skill-logo"
                                />
                            </div>
                            <span className="skill-name">Figma</span>
                        </div>

                        {/* ILLUSTRATOR */}
                        <div className="skill-item" title="Illustrator">
                            <div className="skill-icon-box ai-box">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="skill-logo" />
                            </div>
                            <span className="skill-name">Illustrator</span>
                        </div>

                        {/* HTML5 */}
                        <div className="skill-item" title="HTML5">
                            <div className="skill-icon-box html-box">
                                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" className="skill-logo" />
                            </div>
                            <span className="skill-name">HTML5</span>
                        </div>

                        {/* CSS3 */}
                        <div className="skill-item" title="CSS3">
                            <div className="skill-icon-box css-box">
                                <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3" className="skill-logo" />
                            </div>
                            <span className="skill-name">CSS3</span>
                        </div>

                        {/* JAVASCRIPT */}
                        <div className="skill-item" title="JavaScript">
                            <div className="skill-icon-box js-box">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                    alt="JS"
                                    className="skill-logo js-logo-adjust"
                                />
                            </div>
                            <span className="skill-name">JavaScript</span>
                        </div>

                        {/* REACT / NATIVE */}
                        <div className="skill-item" title="React & React Native">
                            <div className="skill-icon-box react-box">
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="skill-logo react-spin" />
                            </div>
                            <span className="skill-name">React / Native</span>
                        </div>

                        {/* VITE */}
                        <div className="skill-item" title="Vite">
                            <div className="skill-icon-box vite-box">
                                <img src="https://vitejs.dev/logo.svg" alt="Vite" className="skill-logo" />
                            </div>
                            <span className="skill-name">Vite</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}