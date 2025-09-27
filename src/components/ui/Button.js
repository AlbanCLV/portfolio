import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseClass = 'btn';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    className,
  ].filter(Boolean).join(' ');

  const buttonContent = (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;