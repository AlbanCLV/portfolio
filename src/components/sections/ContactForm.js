import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Ici vous pourriez intégrer avec un service comme Formspree, Netlify Forms, etc.
      console.log('Form data:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="contact-form">
      <h3>Send me a message</h3>
      
      {submitStatus === 'success' && (
        <motion.div
          className="contact-form__message contact-form__message--success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully! I will reply to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="contact-form__message contact-form__message--error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          An error occurred. Please try again.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className="contact-form__submit"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;