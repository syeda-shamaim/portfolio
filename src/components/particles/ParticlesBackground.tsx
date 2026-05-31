import { useMemo } from 'react';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

function ParticlesCanvas() {
  const { loaded } = useParticlesProvider();

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: ['#dc2626', '#ef4444', '#fafafa'] },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: { enable: true, speed: 1, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: '#dc2626',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          outModes: { default: 'bounce' },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!loaded) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <ParticlesCanvas />
    </ParticlesProvider>
  );
}
