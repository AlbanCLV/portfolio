import React, { useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    window.location.href = `mailto:albancalvo@gmail.com?subject=Contact%20depuis%20le%20portfolio&body=Nom:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AMessage:%0A${encodeURIComponent(form.message)}`;
    setStatus('Merci pour votre message !');
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2>Contact</h2>
      <div className={styles.contactInfos}>
        <div>
          <strong>Email :</strong>{' '}
          <a href="mailto:albancalvo@gmail.com" className={styles.infoLink}>
            albancalvo@gmail.com
          </a>
        </div>
        <div>
          <strong>Téléphone :</strong>{' '}
          <a href="tel:+33612345678" className={styles.infoLink}>
            06 12 34 56 78
          </a>
        </div>
        <div>
          <strong>LinkedIn :</strong>{' '}
          <a
            href="https://www.linkedin.com/in/alban-calvo-b28013196/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            linkedin.com/in/alban-calvo
          </a>
        </div>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
        {status && <div className={styles.status}>{status}</div>}
      </form>
    </section>
  );
}