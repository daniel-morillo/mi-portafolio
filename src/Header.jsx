import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import PropTypes from 'prop-types';

const links = [
  { href: '#home', es: 'Inicio', en: 'Home' },
  { href: '#about', es: 'Sobre Mí', en: 'About Me' },
  { href: '#projects', es: 'Proyectos', en: 'Projects' },
  { href: '#skills', es: 'Habilidades', en: 'Skills' },
  { href: '#contact', es: 'Contacto', en: 'Contact' },
];

export default function Header({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEs = language === 'es';

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-text/10 bg-primary/80 text-text backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl xl:max-w-[90rem] items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-2xl font-extrabold tracking-tight text-text transition-colors hover:text-highlight">
          Daniel<span className="text-secondary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {isEs ? link.es : link.en}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="nav-link ml-1 cursor-pointer border-0 bg-transparent"
          >
            {isEs ? 'EN' : 'ES'}
          </button>
        </nav>

        <a href="mailto:danielmorillo2013@gmail.com" className="btn-primary hidden text-sm md:inline-flex">
          {isEs ? 'Contáctame' : 'Contact Me'}
        </a>

        <button
          type="button"
          className="btn btn-ghost btn-square text-2xl md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isEs ? 'Abrir menú' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-text/10 bg-primary/95 md:hidden"
          >
            <div className="flex flex-col items-center gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link w-full text-center"
                  onClick={closeMenu}
                >
                  {isEs ? link.es : link.en}
                </a>
              ))}
              <button type="button" className="nav-link" onClick={toggleLanguage}>
                {isEs ? 'EN' : 'ES'}
              </button>
              <a
                href="mailto:danielmorillo2013@gmail.com"
                className="btn-primary mt-2 w-full text-center"
                onClick={closeMenu}
              >
                {isEs ? 'Contáctame' : 'Contact Me'}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
