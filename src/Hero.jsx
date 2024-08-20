import ProfilePhoto from './assets/photo.jpg';
import BackgroundImage from './assets/galaxy.png';
import PropTypes from 'prop-types';

export default function Hero({ language }) {
  return (
    <section
      id="home"
      className="text-center text-text bg-cover bg-center h-screen flex flex-col justify-center items-center p-4"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <img 
        src={ProfilePhoto} 
        alt="Profile" 
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 object-cover" 
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Daniel Morillo</h1>
      <p className="text-lg sm:text-xl mt-2">
        {language === 'es' ? 'Estudiante de Ingeniería de Sistemas' : 'Systems Engineering Student'}
      </p>
    </section>
  );
}

Hero.propTypes = {
  language : PropTypes.string.isRequired
}


