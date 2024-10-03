'use client';

import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

export function Preloader() {
  return (
    <div className="flex items-center justify-center grow">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <LoaderCircle size={48} className="text-muted-foreground" />
      </motion.div>
    </div>
  );
}
