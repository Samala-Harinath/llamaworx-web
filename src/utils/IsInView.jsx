import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IsInView = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {typeof children === 'function' ? children(isInView) : children}
    </motion.div>
  );
};

export default IsInView;
