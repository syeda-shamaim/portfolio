import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
import { projects, type Project } from '../../data/portfolio';
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

const CARD_IMAGE_HEIGHT = 'h-52 sm:h-56';

function ProjectImage({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  const fit = project.imageFit ?? 'cover';
  const isContain = fit === 'contain';

  return (
    <div
      className={`relative overflow-hidden ${CARD_IMAGE_HEIGHT} ${className}`}
      style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className={`h-full w-full transition-transform duration-500 ${
          isContain
            ? 'object-contain px-2 py-3 group-hover:scale-[1.02]'
            : 'object-cover object-center group-hover:scale-105'
        }`}
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const fit = project.imageFit ?? 'cover';
  const isContain = fit === 'contain';

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group glass flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative shrink-0">
        <ProjectImage project={project} />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity ${
            isContain ? 'opacity-0 group-hover:opacity-50' : 'opacity-0 group-hover:opacity-50'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onOpen(project)}
            className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-red focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
            aria-label={`View details for ${project.title}`}
          >
            <FiEye size={20} className="text-white" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-red focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={20} className="text-white" />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-red focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FiGithub size={20} className="text-white" />
            </a>
          )}
        </div>
        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-red px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t, i) => (
            <Badge key={t} label={t} index={i} />
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-gray-500">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects" className="bg-black/35">
      <SectionHeading
        subtitle="Portfolio"
        title="Featured Projects"
        description="A selection of web applications and full-stack systems I've built"
      />

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title ?? ''}>
        {selected && (
          <div>
            <ProjectImage project={selected} className="mb-6 rounded-xl" />
            <p className="mb-6 leading-relaxed text-gray-300">{selected.longDescription}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {selected.tech.map((t, i) => (
                <Badge key={t} label={t} index={i} />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
              {selected.githubUrl && selected.githubUrl !== '#' && (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red px-5 py-2.5 text-sm font-semibold text-red transition-colors hover:bg-red hover:text-white"
                >
                  <FiGithub size={16} /> View Code
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </AnimatedSection>
  );
}
