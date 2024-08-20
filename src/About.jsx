import mePhoto from "./assets/photo.jpg";
import PropTypes from "prop-types";

export default function About({ language }) {
    return (
        <section id="about" className="bg-primary text-text flex flex-col items-center p-6">
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl">
                <div className="w-full md:w-1/3 p-3 relative mb-6 md:mb-0">
                    <img
                        src={mePhoto}
                        alt="About Me"
                        className="w-full h-full object-cover rounded-md shadow-md"
                    />
                </div>

                <div className="w-full md:flex-1 p-6 text-center md:text-left rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-highlight">
                        {language === 'es'? 'Sobre Mí': 'About Me'}
                    </h2>
                    <p className="mb-4">
                        {language === 'es'? 'Mi nombre es Daniel Morillo. Actualmente estoy cursando décimo trimestre de Ingeniería de Sistemas en la Unimet y he adquirido conocimientos que van desde la programación web, programación con Java y Python, Bases de Datos y Análisis de Datos.':
                        'My name is Daniel Morillo. I am currently studying the tenth trimester of Systems Engineering at Unimet and I have acquired knowledge ranging from web programming, programming with Java and Python, Databases and Data Analysis.'}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        {language === 'es'? <ul className="space-y-2 mb-4 md:mb-0">
                            <li><strong>Teléfono:</strong> +58-4264180319</li>
                            <li><strong>Dirección:</strong> Caracas, Venezuela</li>
                            <li><strong>Disponible para Trabajos Remotos</strong></li>
                            <li><strong>LinkedIn:</strong> Daniel Morillo</li>
                        </ul> :
                        <ul className="space-y-2 mb-4 md:mb-0">
                            <li><strong>Phone:</strong> +58-4264180319</li>
                            <li><strong>Address:</strong> Caracas, Venezuela</li>
                            <li><strong>Available for Remote Jobs</strong></li>
                            <li><strong>LinkedIn:</strong> Daniel Morillo</li>
                            </ul>}
                        <a href="/DanielMorilloCV.pdf" className="bg-highlight text-text py-2 px-4 rounded text-center">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

About.propTypes = {
    language: PropTypes.string.isRequired,
}



