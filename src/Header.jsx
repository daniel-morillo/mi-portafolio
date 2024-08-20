import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

export default function Header({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-text p-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold">Daniel</div>

      <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-highlight p-4 text-lg font-semibold">
          {language === 'es' ? 'Inicio' : 'Home'}
        </a>
        <a href="#about" className="hover:text-highlight p-4 text-lg font-semibold">
          {language === 'es' ? 'Sobre Mi' : 'About Me'}
        </a>
        <a href="#services" className="hover:text-highlight p-4 text-lg font-semibold">
          {language === 'es' ? 'Servicios' : 'Services'}
        </a>
        <a href="#contact" className="hover:text-highlight p-4 text-lg font-semibold">
          {language === 'es' ? 'Contacto' : 'Contact'}
        </a>
        <a className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleLanguage}>
          {language === 'es' ? 'EN' : 'ES'}
        </a>
      </div>

      <a href="mailto:danielmorillo2013@gmail.com" className="hidden md:block">
        <button className="bg-secondary text-text py-2 px-4 rounded">
          {language === 'es' ? 'Contáctame' : 'Contact Me'}
        </button>
      </a>


      <button className="md:hidden text-3xl" onClick={toggleMenu}>
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-1/2 bg-black bg-opacity-50 text-text flex flex-col items-center md:hidden space-y-2 p-4 rounded-bl-lg shadow-lg text-center">
          <a href="#home" className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleMenu}>
            {language === 'es' ? 'Inicio' : 'Home'}
          </a>
          <a href="#about" className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleMenu}>
            {language === 'es' ? 'Sobre Mi' : 'About Me'}
          </a>
          <a href="#services" className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleMenu}>
            {language === 'es' ? 'Servicios' : 'Services'}
          </a>
          <a href="#contact" className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleMenu}>
            {language === 'es' ? 'Contacto' : 'Contact'}
          </a>
          <a className="hover:text-highlight p-4 text-lg font-semibold" onClick={toggleLanguage}>
            {language === 'es' ? 'EN' : 'ES'}
          </a>
          <a href="mailto:danielmorillo2013@gmail.com" className="w-full">
            <button className="bg-secondary text-text py-2 px-4 rounded w-full">
              {language === 'es' ? 'Contáctame' : 'Contact Me'}
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

// Define las validaciones de props
Header.propTypes = {
  language: PropTypes.string.isRequired, 
  toggleLanguage: PropTypes.func.isRequired, 
};




