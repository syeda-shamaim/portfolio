import { motion } from 'framer-motion';

const orbs = [
  {
    className: 'top-[5%] -left-32 h-[26rem] w-[26rem] rounded-full bg-red/30 blur-[95px]',
    animate: { x: [0, 50, 0], y: [0, 40, 0] },
    duration: 16,
  },
  {
    className: 'top-[30%] -right-32 h-[30rem] w-[30rem] rounded-full bg-maroon/35 blur-[105px]',
    animate: { x: [0, -40, 0], y: [0, 50, 0] },
    duration: 20,
  },
  {
    className: 'bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-red-dark/28 blur-[85px]',
    animate: { x: [0, 35, 0], y: [0, -30, 0] },
    duration: 14,
  },
  {
    className: 'bottom-[0%] right-[10%] h-64 w-64 rounded-full bg-neon-red/25 blur-[75px]',
    animate: { x: [0, -30, 0], y: [0, 35, 0] },
    duration: 18,
  },
  {
    className: 'top-[50%] left-[40%] h-60 w-60 rounded-full bg-maroon-dark/38 blur-[115px]',
    animate: { x: [0, 20, 0], y: [0, -25, 0], scale: [1, 1.1, 1] },
    duration: 24,
  },
];

export function NeonBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#7f1d1d44_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#991b1b38_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#450a0a30_0%,_transparent_60%)]" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.className}`}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="neon-ring absolute top-[12%] right-[8%] h-48 w-48 rounded-full border-2 border-red/55"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="neon-ring absolute top-[12%] right-[8%] h-32 w-32 rounded-full border border-red-light/40"
        animate={{ rotate: -360, scale: [1.05, 0.95, 1.05] }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="neon-ring absolute bottom-[22%] left-[5%] h-32 w-32 rotate-45 rounded-3xl border-2 border-maroon/60 bg-maroon/8"
        animate={{ rotate: [45, 135, 45], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="neon-diamond absolute top-[48%] right-[22%] h-20 w-20 rotate-45 border-2 border-red-light/45 bg-red/10"
        animate={{ rotate: [45, 225, 45], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="neon-diamond absolute top-[25%] left-[18%] h-14 w-14 rotate-45 border border-red/70 bg-red/10"
        animate={{ rotate: [45, 405, 45], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="neon-line absolute top-[38%] left-[3%] h-[2px] w-48 bg-gradient-to-r from-transparent via-red to-transparent"
        animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.7, 1.3, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="neon-line absolute bottom-[35%] right-[4%] h-[2px] w-64 bg-gradient-to-r from-transparent via-neon-red to-transparent"
        animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1.4, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <motion.div
        className="neon-line absolute top-[65%] left-[30%] h-[2px] w-40 rotate-45 bg-gradient-to-r from-transparent via-maroon to-transparent"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="neon-hex absolute top-[68%] left-[50%] h-24 w-24 opacity-55" />
      <div className="neon-hex absolute top-[15%] left-[42%] h-14 w-14 opacity-40" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(220,38,38,0.04)_50%,transparent_60%)]" />
    </div>
  );
}
