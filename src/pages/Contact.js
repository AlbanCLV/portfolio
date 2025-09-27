import { motion } from 'framer-motion';
import ContactForm from '../components/sections/ContactForm';
import './Contact.scss';

const Contact = () => {
  return (
    <motion.div
        className="contact-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            className="contact-page__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact me
          </motion.h1>

          <motion.p
            className="contact-page__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind? Don't hesitate to contact me!
          </motion.p>

          <div className="contact-page__content">
            <motion.div
              className="contact-page__info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="contact-info">
                <h2>Contact information</h2>
                <div className="contact-info__item">
                  <strong>Email:</strong>
                  <a href="mailto:albancalvo@gmail.com">
                    albancalvo@gmail.com
                  </a>
                </div>
                <div className="contact-info__item">
                  <strong>LinkedIn:</strong>
                  <a
                    href="https://www.linkedin.com/in/alban-calvo-b28013196/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/alban-calvo-b28013196/
                  </a>
                </div>
                <div className="contact-info__item">
                  <strong>GitHub:</strong>
                  <a
                    href="https://github.com/AlbanCLV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/AlbanCLV
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-page__form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
};

export default Contact;