import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillRadialProps {
  name: string;
  level: number;
  index: number;
}

export function SkillRadial({ name, level, index }: SkillRadialProps) {
  const [hovered, setHovered] = useState(false);
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <svg width="96" height="96" className="-rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-black-muted"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-red">
          {hovered ? `${level}%` : level}
        </span>
      </div>
      <span className="text-center text-xs font-medium text-gray-400">{name}</span>
    </motion.div>
  );
}
