import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import './NotFound.scss';

const NotFound = () => {
  return (
    <motion.div
        className="not-found"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            className="not-found__content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Page non trouvée</h2>
            <p className="not-found__text">
              Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <div className="not-found__actions">
              <Link to="/" className="btn btn--primary">
                Retour à l&apos;accueil
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Me contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
};

export default NotFound;