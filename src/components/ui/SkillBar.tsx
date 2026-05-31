import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export function SkillBar({ name, level, index }: SkillBarProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0.6 }}
          className="text-sm font-bold text-red"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-black-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.2, duration: 0.8, ease: 'easeOut' }}
          className="relative h-full rounded-full bg-gradient-to-r from-red to-red-light"
        >
          <motion.div
            animate={{ x: hovered ? ['-100%', '200%'] : '-100%' }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
