import React from 'react';
import "./Navbar.css";
import { Home, Coffee, FolderKanban, Phone } from "lucide-react";

// 1. IMPORTAMOS el icono para que Vite lo procese correctamente
import avatarIcon from "../assets/icon.png";

export default function Navbar() {

    // Función para deslizar suavemente y aplicar el efecto de desenfoque
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        const mainContent = document.getElementById("main-content");

        if (section) {
            if (mainContent) mainContent.classList.add("scrolling-blur");

            section.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                if (mainContent) mainContent.classList.remove("scrolling-blur");
            }, 600);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <button onClick={() => handleScroll('about')}>
                    <Home size={18} />
                    About me
                </button>

                <button onClick={() => handleScroll('skills')}>
                    <Coffee size={18} />
                    Skills
                </button>

                <button onClick={() => handleScroll('projects')}>
                    <FolderKanban size={18} />
                    Projects
                </button>

                <button onClick={() => handleScroll('contact')}>
                    <Phone size={18} />
                    Contact me
                </button>
            </div>

            <div className="avatar-small">
                {/* 2. USAMOS la variable importada aquí */}
                <img src={avatarIcon} alt="avatar icon" />
            </div>
        </nav>
    );
}