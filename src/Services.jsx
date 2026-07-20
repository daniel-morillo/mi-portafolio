import FadeIn from './FadeIn';
import PropTypes from 'prop-types';

const skillGroups = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'Next.js', 'Angular', 'Svelte', 'Tailwind CSS'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    items: ['TypeScript', 'Node.js', 'Python'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: ['AWS Amplify', 'AWS EC2', 'S3', 'Firebase'],
  },
  {
    title: { es: 'Data Analysis', en: 'Data Analysis' },
    items: ['Python', 'Pandas', 'Metabase', 'Power BI'],
  },
  {
    title: { es: 'Herramientas AI', en: 'AI Tools' },
    items: ['Cursor', 'ChatGPT'],
  },
];

export default function Services({ language }) {
  const isEs = language === 'es';

  return (
    <section id="skills" className="section-shell bg-tercolor/90 text-text">
      <div className="mx-auto max-w-7xl xl:max-w-[90rem]">
        <FadeIn className="mb-14 text-center">
          <h2 className="section-title">
            {isEs ? 'Habilidades' : 'Skills'}
          </h2>
          <p className="mt-3 text-text/70">
            {isEs
              ? 'Stack técnico con el que trabajo día a día.'
              : 'The technical stack I work with day to day.'}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title.en} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-text/10 bg-primary/30 p-6 transition-all duration-300 hover:border-highlight/35 hover:bg-primary/45">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
                  {group.title[isEs ? 'es' : 'en']}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 border-t border-text/15 pt-8" delay={0.1}>
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-secondary">
            Soft skills
          </h3>
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-text/80">
            {isEs
              ? 'Metodologías ágiles · Liderazgo · Organización · Comunicación · Pensamiento crítico · Trabajo bajo presión · Resolución de problemas · Trabajo en equipo'
              : 'Agile methodologies · Leadership · Organization · Communication · Critical thinking · Working under pressure · Problem-solving · Teamwork'}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

Services.propTypes = {
  language: PropTypes.string.isRequired,
};
