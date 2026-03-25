import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

/**
 * HOME COMPONENT
 * Estructura principal del portafolio que integra todas las secciones.
 * El Navbar permanece fuera del contenedor para mantener su posición fija.
 */
export default function Home() {
    return (
        <>
            {/* El Navbar se queda AFUERA para que nunca se ponga borroso y sea accesible */}
            <Navbar />

            {/* Envolvemos todo el contenido en este div mágico con el ID que busca el Navbar */}
            <div id="main-content" className="container">

                {/* Sección Hero / About */}
                <section id="about">
                    <Hero />
                </section>

                {/* Sección de Habilidades (Incluye su propio ID dentro del componente) */}
                <Skills />

                {/* Sección de Proyectos (Incluye su propio ID dentro del componente) */}
                <Projects />

                {/* Sección de Contacto (Ya contiene el id="contact" en su componente) */}
                <Contact />

            </div>
        </>
    );
}