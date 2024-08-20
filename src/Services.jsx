import reactIcon from './assets/reactIcon.svg';
import pythonIcon from './assets/pythonIcon.svg';
import postgresIcon from './assets/postgres.svg';
import PropTypes from 'prop-types';

export default function Services({ language }) {
  return (
    <section id="services" className="bg-tercolor text-white p-10">
      <h2 className="text-4xl font-bold mb-10 text-center">{
        language === 'es' ? 'Habilidades' : 'Skills'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border-text border rounded-md shadow-lg text-center">
          <div className='flex flex-col items-center mb-4'>
            <img src={reactIcon} alt="React Icon" className='w-16 h-16 mb-4'></img>
            <h3 className="text-2xl font-bold text-text">FrontEnd</h3>
          </div>
          <ul className='text-center'>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js, TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="p-8 border-lightRed border rounded-md shadow-lg text-center">
          <div className='flex flex-col items-center mb-4'>
            <img src={pythonIcon} alt="React Icon" className='w-16 h-16 mb-4'></img>
            <h3 className="text-2xl font-bold text-text">BackEnd</h3>
          </div>
          <p>Node.js, Python, Java</p>
        </div>
        <div className="p-8 border-lightRed border rounded-md shadow-lg text-center">
          <div className='flex flex-col items-center mb-4'>
            <img src={postgresIcon} alt="React Icon" className='w-16 h-16 mb-4'></img>
            <h3 className="text-2xl font-bold">{language === 'es' ? 'Bases de Datos' : 'Databases'}</h3>
          </div>
          <ul className='text-center'>
            <li>Lenguaje SQL, Postgresql</li>
            <li>MongoDB, Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {
  language: PropTypes.string.isRequired,
}
