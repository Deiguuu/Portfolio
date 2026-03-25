import "./Navbar.css";
import { Home, Coffee, FolderKanban, Phone } from "lucide-react";

export default function Navbar() {

    // Función para deslizar suavemente y aplicar el efecto de desenfoque
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        // Usamos un contenedor principal para no desenfocar el Navbar también
        const mainContent = document.getElementById("main-content");

        if (section) {
            // 1. Aplicamos la clase de desenfoque al contenido
            if (mainContent) mainContent.classList.add("scrolling-blur");

            // 2. Deslizamos suavemente hacia la sección deseada
            section.scrollIntoView({ behavior: "smooth" });

            // 3. Retiramos el desenfoque después de 600ms (ajusta a tu gusto)
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

                {/* ¡Aquí está conectado tu botón de Skills! */}
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
                <img src="/src/assets/icon.png" alt="avatar icon" />
            </div>
        </nav>
    );
}