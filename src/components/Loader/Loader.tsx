'use client';

import Sofa from '@/icons/Sofa';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="text-2xl font-bold text-gray-800 flex items-center space-x-3"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <motion.span
          className="w-3 h-3 bg-black rounded-full"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Sofa />
        <span className="tracking-wide">ModernHaus</span>
        <motion.span
          className="w-3 h-3 bg-black rounded-full"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
