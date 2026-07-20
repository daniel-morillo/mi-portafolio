import { motion, useReducedMotion } from 'motion/react';
import ProfilePhoto from './assets/DanPhoto.jpg';
import BackgroundImage from './assets/galaxy.png';
import PropTypes from 'prop-types';

export default function Hero({ language }) {
  const isEs = language === 'es';
  const prefersReduced = useReducedMotion();

  const item = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-cover bg-center p-6 text-center text-text"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-highlight/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <motion.img
          {...item}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={ProfilePhoto}
          alt="Daniel Morillo"
          className="mb-5 h-24 w-24 rounded-full object-cover shadow-glow ring-2 ring-secondary/70 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
        />
        <motion.h1
          {...item}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl"
        >
          Daniel Morillo
        </motion.h1>
        <motion.p
          {...item}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 text-lg font-semibold text-text sm:text-xl md:text-2xl"
        >
          {isEs ? 'Ingeniero de Sistemas · Full Stack Developer' : 'Systems Engineer · Full Stack Developer'}
        </motion.p>
        <motion.p
          {...item}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg"
        >
          {isEs
            ? 'Desarrollo web, microservicios y análisis de datos. Actualmente Full Stack en fintech (PagoAsap), con tesis enfocada en Data Analysis.'
            : 'Web development, microservices, and data analysis. Currently Full Stack in fintech (PagoAsap), with a thesis focused on Data Analysis.'}
        </motion.p>

        <motion.div
          {...item}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            {isEs ? 'Ver proyectos' : 'View projects'}
          </a>
          <a
            href="/DanielMorilloCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {isEs ? 'Descargar CV' : 'Download CV'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  language: PropTypes.string.isRequired,
};
