import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  index?: number;
}

export function Badge({ label, index = 0 }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex cursor-default items-center rounded-full border border-red/30 bg-red/10 px-3 py-1.5 text-xs font-medium text-red"
    >
      {label}
    </motion.span>
  );
}
