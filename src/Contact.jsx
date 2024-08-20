import PropTypes from 'prop-types';

export default function Contact(language) {
    return (
        <section id="contact" className="bg-primary text-text flex flex-col items-center p-6">
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl">
                <div className="w-full p-6 text-center md:text-left rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-text">
                        {language === 'es'? 'Contacto': 'Contact'}
                    </h2>
                    <p className="mb-4">
                        {language === 'es'? 'Si deseas contactarme, puedes hacerlo a través de estos medios': 
                        'If you want to contact me, please contact me through these means:'}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <ul className="space-y-2 mb-4 md:mb-0">
                            <li><strong>Email:</strong> danielmorillo2013@gmail.com</li>
                            <li><strong>GitHub:</strong> <a href="https://github.com/daniel-morillo" className="text-highlight">https://github.com/daniel-morillo</a></li>
                            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/daniel-morillo-4bb8202b6/" className="text-highlight">https://www.linkedin.com/in/daniel-morillo-4bb8202b6/</a></li>
                        </ul>
                        <a href="mailto:danielmorillo2013@gmail.com" className="bg-highlight text-text py-2 px-4 rounded text-center">
                            {language === 'es' ? 'Enviar Email' : 'Send Email'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

Contact.propTypes = {
    language: PropTypes.string.isRequired,
}
