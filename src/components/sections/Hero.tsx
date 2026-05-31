import { motion } from 'framer-motion';
import { FiArrowDown, FiChevronRight } from 'react-icons/fi';
import { personalInfo, heroTags } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { ParticlesBackground } from '../particles/ParticlesBackground';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black/30"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red/10 via-transparent to-red-light/5" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #dc262620 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ef444415 0%, transparent 40%)',
        }}
      />
      <ParticlesBackground />

      <div className="container-custom relative z-10 px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-2 text-sm text-red"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient block sm:inline">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 font-display text-xl font-semibold text-red sm:text-2xl md:text-3xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-base text-gray-400 sm:text-lg"
        >
          <span>Building with</span>
          {heroTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="inline-flex items-center"
            >
              <span className="rounded-md bg-red/10 px-2 py-0.5 font-semibold text-red-light">{tag}</span>
              {i < heroTags.length - 1 && <span className="mx-1 text-red">·</span>}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="primary">
            Hire Me
            <FiChevronRight size={18} />
          </Button>
          <Button href="#projects" variant="outline">
            View Projects
          </Button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-sm text-gray-500 transition-colors hover:text-red"
          aria-label="Scroll to about section"
        >
          <span>Scroll down</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <FiArrowDown size={20} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
