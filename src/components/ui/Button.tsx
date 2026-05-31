import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  download?: string;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  href,
  download,
  children,
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60';

  const variants = {
    primary:
      'bg-red text-white shadow-lg shadow-red/25 hover:bg-red-dark hover:shadow-red/40 hover:-translate-y-0.5',
    secondary:
      'bg-red-dark text-white shadow-lg shadow-red/25 hover:bg-red hover:shadow-red/40 hover:-translate-y-0.5',
    outline:
      'border-2 border-red text-red hover:bg-red hover:text-white',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
