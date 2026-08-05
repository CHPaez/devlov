import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_STANDARD } from '../theme';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

/** Fades a section up into place the first time it scrolls into view. */
export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: EASE_STANDARD }}
    >
      {children}
    </motion.div>
  );
}
