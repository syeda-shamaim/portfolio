import { motion } from 'framer-motion';

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={`group inline-flex items-center ${className}`}>
      <span className="relative h-9 w-9 shrink-0">
        <motion.span
          className="absolute inset-0 rounded-lg border-2 border-red"
          whileHover={{ x: -2, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
        <motion.span
          className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg bg-red"
          whileHover={{ x: 2, y: 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
        <span className="absolute inset-[5px] flex items-center justify-center rounded-md bg-black font-mono text-[10px] font-bold leading-none text-red">
          &lt;/&gt;
        </span>
      </span>
    </span>
  );
}
