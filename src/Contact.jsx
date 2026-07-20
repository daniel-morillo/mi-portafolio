import FadeIn from './FadeIn';
import PropTypes from 'prop-types';

export default function Contact({ language }) {
  const isEs = language === 'es';

  return (
    <section id="contact" className="section-shell bg-primary text-text">
      <div className="mx-auto w-full max-w-7xl xl:max-w-[90rem]">
        <FadeIn>
          <div className="rounded-2xl border border-text/10 bg-tercolor/40 p-8 shadow-soft md:p-12">
            <h2 className="section-title mb-4">
              {isEs ? 'Contacto' : 'Contact'}
            </h2>
            <p className="mb-8 max-w-2xl text-text/80">
              {isEs
                ? 'Si quieres hablar de un rol Full Stack, un proyecto o colaborar, escríbeme por cualquiera de estos medios.'
                : 'If you want to talk about a Full Stack role, a project, or a collaboration, reach me through any of these channels.'}
            </p>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <ul className="space-y-3">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:danielmorillo2013@gmail.com"
                    className="text-highlight transition-colors hover:text-secondary"
                  >
                    danielmorillo2013@gmail.com
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/daniel-morillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight transition-colors hover:text-secondary"
                  >
                    github.com/daniel-morillo
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/daniel-morillo-4bb8202b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight transition-colors hover:text-secondary"
                  >
                    linkedin.com/in/daniel-morillo
                  </a>
                </li>
              </ul>

              <a href="mailto:danielmorillo2013@gmail.com" className="btn-primary">
                {isEs ? 'Enviar Email' : 'Send Email'}
              </a>
            </div>
          </div>
        </FadeIn>

        <p className="mt-10 text-center text-sm text-text/45">
          © {new Date().getFullYear()} Daniel Morillo
        </p>
      </div>
    </section>
  );
}

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};
