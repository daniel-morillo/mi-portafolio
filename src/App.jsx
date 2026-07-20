// App.jsx
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';

export default function App() {
  const [language, setLanguage] = useState('es'); 

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es'); 
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Services language={language} />
      <Contact language={language} />
    </div>
  );
}

