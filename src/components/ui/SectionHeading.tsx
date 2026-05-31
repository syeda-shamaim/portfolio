import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export function SectionHeading({ subtitle, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center md:mb-16"
    >
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-red">
        {subtitle}
      </span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ id, children, className = '' }: AnimatedSectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
