import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './ContactForm.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnngdbrj");

  if (state.succeeded) {
    return (
      <Card className="contact-form">
        <motion.div
          className="contact-form__message contact-form__message--success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully! I will reply to you soon.</p>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card className="contact-form">
      <h3>Send me a message</h3>

      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={state.submitting}
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            disabled={state.submitting}
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            disabled={state.submitting}
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={state.submitting}
          className="contact-form__submit"
        >
          {state.submitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;