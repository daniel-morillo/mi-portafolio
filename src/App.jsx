// App.jsx
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function App() {
  const [language, setLanguage] = useState('es'); 

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es'); 
  };

  return (
    <div>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Contact language={language} />
    </div>
  );
}

