import "./Hero.css";
import avatar from "../assets/avatar.png";

export default function Hero() {
    return (
        <section id="hero" className="hero-section">

            {/* --- NUEVO CONTENEDOR INVISIBLE PARA ALINEAR --- */}
            <div className="hero-container">

                <div className="hero-text">
                    <h1>I'm Deigu</h1>
                    <p>
                        Hello, my name is Diego Roque, a 21-year-old Cybernetic
                        Electronic Engineering student in my final years of study.
                        I combine a strong technical foundation with a passion for
                        user-centered UI design.
                    </p>
                </div>

                <div className="hero-image">
                    <img
                        src={avatar}
                        className="avatar"
                        alt="Illustration avatar of Diego Roque"
                    />
                </div>

            </div> {/* --- FIN DEL CONTENEDOR INVISIBLE --- */}

        </section>
    );
}