import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Card from '../ui/Card';
import './Contact.scss';

const Contact = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact me
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          You have a project in mind ? Don't hesitate to contact me!
        </motion.p>

        <div className="contact-section__content">
          <motion.div
            className="contact-section__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-info__item">
                  <a href="mailto:albancalvo@gmail.com">
                    <strong>Email:</strong> albancalvo@gmail.com
                  </a>
                </div>
                <div className="contact-info__item">
                  <a
                    href="https://www.linkedin.com/in/alban-calvo-b28013196/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>LinkedIn: </strong> https://www.linkedin.com/in/alban-calvo-b28013196/
                  </a>
                </div>
                <div className="contact-info__item">
                  <a
                    href="https://github.com/AlbanCLV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>GitHub:</strong> https://github.com/AlbanCLV
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="contact-section__form"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;