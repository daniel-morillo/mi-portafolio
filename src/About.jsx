import mePhoto from './assets/DanPhoto.jpg';
import FadeIn from './FadeIn';
import PropTypes from 'prop-types';

export default function About({ language }) {
  const isEs = language === 'es';

  return (
    <section id="about" className="section-shell bg-primary/80 text-text">
      <div className="mx-auto flex w-full max-w-7xl xl:max-w-[90rem] flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <FadeIn className="w-full md:w-2/5 lg:w-1/3">
          <div className="overflow-hidden rounded-2xl border border-text/10 shadow-soft">
            <img
              src={mePhoto}
              alt="Daniel Morillo"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        <FadeIn className="w-full text-center md:w-3/5 md:text-left lg:w-2/3" delay={0.1}>
          <h2 className="section-title mb-5">
            {isEs ? 'Sobre Mí' : 'About Me'}
          </h2>

          <p className="mb-4 text-text/90 leading-relaxed">
            {isEs
              ? 'Ingeniero de Sistemas con tesis en Data Analysis. Tengo experiencia en diseño web, arquitecturas MVC, microservicios, programación web, bases de datos y análisis de datos. Me orientan la mejora continua, el pensamiento analítico, el liderazgo y la resolución de problemas técnicos.'
              : 'Systems Engineer with a thesis in Data Analysis. Experienced in web design, MVC architectures, microservices, web programming, databases, and data analysis. Driven by continuous improvement, analytical thinking, leadership, and technical problem-solving.'}
          </p>

          <p className="mb-6 text-text/90 leading-relaxed">
            {isEs
              ? 'Hoy trabajo como Full Stack Developer en PagoAsap (Caracas), construyendo productos financieros con TypeScript, Node.js, Angular, Svelte, Next.js, PostgreSQL, MongoDB y AWS. Graduado de la Universidad Metropolitana (Lista del Rector).'
              : 'Today I work as a Full Stack Developer at PagoAsap (Caracas), building financial products with TypeScript, Node.js, Angular, Svelte, Next.js, PostgreSQL, MongoDB, and AWS. Graduated from Universidad Metropolitana (Rector’s List).'}
          </p>

          <ul className="mb-7 inline-block space-y-2.5 text-left md:block">
            <li>
              <strong>{isEs ? 'Ubicación:' : 'Location:'}</strong> Caracas, Venezuela
            </li>
            <li>
              <strong>{isEs ? 'Teléfono:' : 'Phone:'}</strong>{' '}
              <a href="tel:+584264180319" className="transition-colors hover:text-highlight">
                (+58) 426-4180319
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:danielmorillo2013@gmail.com" className="transition-colors hover:text-highlight">
                danielmorillo2013@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/daniel-morillo-4bb8202b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-highlight"
              >
                Daniel Morillo
              </a>
            </li>
            <li>
              <strong>{isEs ? 'Idiomas:' : 'Languages:'}</strong>{' '}
              {isEs ? 'Español (nativo) · Inglés B2' : 'Spanish (native) · English B2'}
            </li>
            <li>
              <span className="badge badge-outline border-secondary/50 text-secondary">
                {isEs ? 'Disponible para trabajo remoto' : 'Available for remote work'}
              </span>
            </li>
          </ul>

          <a
            href="/DanielMorilloCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {isEs ? 'Descargar CV' : 'Download CV'}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

About.propTypes = {
  language: PropTypes.string.isRequired,
};
