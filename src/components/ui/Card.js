import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Card.scss';

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'default',
  ...props
}) => {
  const classes = [
    'card',
    `card--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = hover ? {
    hover: { 
      y: -5,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
  } : {};

  return (
    <motion.div
      className={classes}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hover ? 'hover' : undefined}
      transition={{ duration: 0.3 }}
      {...hoverVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
};

export default Card;