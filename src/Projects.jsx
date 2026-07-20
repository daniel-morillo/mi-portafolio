import { useState } from 'react';
import PropTypes from 'prop-types';
import FadeIn from './FadeIn';

import cronogramaTask from './assets/projects/TaskManager/CronogramaTask.png';
import faseTask from './assets/projects/TaskManager/FaseTask.png';
import ahpLany from './assets/projects/AHP/AHPLANY.png';
import rankingsHouston from './assets/projects/AHP/RankingsHouston.png';
import marketValueYankees from './assets/projects/AHP/MarketValueYankeesAndLA.png';
import marketVsFranchise from './assets/projects/AHP/MarketVSFranchiseSFG.png';

const projects = [
  {
    id: 'plumbery',
    title: {
      es: 'Sistema de Gestión para Plomería',
      en: 'Plumbing Management System',
    },
    subtitle: {
      es: 'Side project · Operaciones y logística',
      en: 'Side project · Operations & logistics',
    },
    description: {
      es: 'Aplicación full stack para administrar el día a día de una plomería: catálogo de productos, pedidos, órdenes de compra y ubicación en mapa.',
      en: 'Full-stack app to run a plumbing business day to day: product catalog, orders, purchase orders, and map-based location.',
    },
    features: {
      es: [
        'CRUD de productos e inventario',
        'Organización de pedidos y órdenes de compra',
        'Geolocalización con Google Maps API',
      ],
      en: [
        'Product & inventory CRUD',
        'Order and purchase-order workflows',
        'Geolocation with Google Maps API',
      ],
    },
    stack: ['SvelteKit', 'shadcn', 'TypeScript', 'Node.js', 'Firebase', 'Google Maps'],
    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/zf3RqTj2W1w',
        label: { es: 'Demo', en: 'Demo' },
      },
    ],
  },
  {
    id: 'construction',
    title: {
      es: 'Construction Task Manager',
      en: 'Construction Task Manager',
    },
    subtitle: {
      es: 'Side project · Gestión de obras',
      en: 'Side project · Construction management',
    },
    description: {
      es: 'Sistema de administración de proyectos para constructoras: fases, tareas y cronogramas con dependencias y diagramas de secuencia.',
      en: 'Project administration system for construction firms: phases, tasks, and schedules with dependencies and sequence diagrams.',
    },
    features: {
      es: [
        'CRUD de proyectos, fases y tareas',
        'Cronograma jerárquico y calendario',
        'Diagramas de secuencia entre fases y tareas',
      ],
      en: [
        'CRUD for projects, phases, and tasks',
        'Hierarchical schedule and calendar',
        'Sequence diagrams across phases and tasks',
      ],
    },
    stack: ['SvelteKit', 'shadcn', 'TypeScript', 'Node.js', 'Firebase'],
    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/rj0vn6QyPRI',
        label: { es: 'Demo', en: 'Demo' },
      },
      { type: 'image', src: cronogramaTask, label: { es: 'Cronograma', en: 'Schedule' } },
      { type: 'image', src: faseTask, label: { es: 'Fases', en: 'Phases' } },
    ],
  },
  {
    id: 'ahp',
    title: {
      es: 'Valor de Mercado MLB (AHP)',
      en: 'MLB Market Value (AHP)',
    },
    subtitle: {
      es: 'Tesis de grado · Análisis de datos',
      en: 'Undergraduate thesis · Data analysis',
    },
    description: {
      es: 'Algoritmo que estima el valor de mercado real de equipos de la MLB combinando métricas deportivas, finanzas y análisis jerárquico multicriterio (AHP).',
      en: 'Algorithm that estimates the true market value of MLB teams by combining sports metrics, finance, and Analytic Hierarchy Process (AHP).',
    },
    features: {
      es: [
        'Modelo multicriterio (AHP) deportivo-financiero',
        'Comparación de rankings AHP vs. franquicia y desempeño',
        'Visualización de valor de mercado por equipo y año',
      ],
      en: [
        'Sports-finance multicriteria (AHP) model',
        'AHP rankings vs. franchise and on-field performance',
        'Market-value visualization by team and year',
      ],
    },
    stack: ['Python', 'Pandas', 'AHP', 'Data Visualization'],
    media: [
      { type: 'image', src: rankingsHouston, label: { es: 'Houston', en: 'Houston' } },
      { type: 'image', src: ahpLany, label: { es: 'Dodgers vs Yankees', en: 'Dodgers vs Yankees' } },
      {
        type: 'image',
        src: marketValueYankees,
        label: { es: 'Market value', en: 'Market value' },
      },
      {
        type: 'image',
        src: marketVsFranchise,
        label: { es: 'Market vs franchise', en: 'Market vs franchise' },
      },
    ],
  },
];

function MediaViewer({ items, language }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="w-full">
      <div className="media-frame aspect-video">
        {current.type === 'youtube' ? (
          <iframe
            key={current.src}
            src={current.src}
            title={current.label[language]}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <img
            src={current.src}
            alt={current.label[language]}
            className="h-full w-full object-contain bg-[#0f1117]"
          />
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item, index) => (
            <button
              key={`${item.label.en}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                active === index
                  ? 'bg-highlight text-text shadow-glow'
                  : 'bg-tercolor/80 text-text/80 hover:bg-highlight/25'
              }`}
            >
              {item.label[language]}
              {item.type === 'youtube' ? ' ▶' : ''}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

MediaViewer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['youtube', 'image']).isRequired,
      src: PropTypes.string.isRequired,
      label: PropTypes.shape({
        es: PropTypes.string.isRequired,
        en: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  language: PropTypes.string.isRequired,
};

export default function Projects({ language }) {
  const lang = language === 'es' ? 'es' : 'en';

  return (
    <section id="projects" className="section-shell bg-primary text-text">
      <div className="mx-auto max-w-7xl xl:max-w-[90rem]">
        <FadeIn className="mb-14 text-center">
          <h2 className="section-title">
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text/75">
            {lang === 'es'
              ? 'Side projects y tesis con demos visuales. Las apps son privadas, por eso muestro video e imágenes en lugar de un link público.'
              : 'Side projects and thesis work with visual demos. The apps are private, so I show video and screenshots instead of a public link.'}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const mediaFirst = index % 2 === 0;

            return (
              <FadeIn key={project.id} delay={0.05}>
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={mediaFirst ? 'lg:order-1' : 'lg:order-2'}>
                    <MediaViewer items={project.media} language={lang} />
                  </div>

                  <div className={mediaFirst ? 'lg:order-2' : 'lg:order-1'}>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                      {project.subtitle[lang]}
                    </p>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                      {project.title[lang]}
                    </h3>
                    <p className="mb-4 leading-relaxed text-text/85">
                      {project.description[lang]}
                    </p>

                    <ul className="mb-5 space-y-2">
                      {project.features[lang].map((feature) => (
                        <li key={feature} className="flex gap-2 text-text/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="skill-chip text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};
