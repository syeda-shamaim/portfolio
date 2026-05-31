import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { BrandLogo } from '../ui/BrandLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeLink = useScrollSpy(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <nav
        className="container-custom relative flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="relative z-10 transition-opacity hover:opacity-90"
          aria-label="Back to home"
        >
          <BrandLogo />
        </a>

        <ul
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? 'text-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-red"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 rounded-lg p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col px-4 py-4" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      activeLink === link.href
                        ? 'bg-red/10 text-red'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
