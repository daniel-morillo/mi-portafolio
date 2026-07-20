import { motion, useReducedMotion } from 'motion/react';
import PropTypes from 'prop-types';

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
};
