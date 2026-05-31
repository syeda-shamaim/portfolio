import { motion } from 'framer-motion';
import { aboutBio, skillBadges, experience } from '../../data/portfolio';
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const badgeGroups = [
  { title: 'Programming', items: skillBadges.programming },
  { title: 'Frameworks', items: skillBadges.frameworks },
  { title: 'Tools & Databases', items: skillBadges.tools },
  { title: 'Backend', items: skillBadges.backend },
];

export function About() {
  return (
    <AnimatedSection id="about" className="relative bg-black-muted/45">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <SectionHeading
        subtitle="About Me"
        title="Crafting Digital Experiences"
        description="Passionate about building intelligent, user-centric applications"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-400 sm:text-lg"
      >
        {aboutBio}
      </motion.p>

      <div className="mb-20 grid gap-8 sm:grid-cols-2">
        {badgeGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <Badge key={item} label={item} index={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <SectionHeading subtitle="Journey" title="Experience & Education" />

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-red via-red-light to-red md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />

        {experience.map((item, index) => {
          const isLeft = index % 2 === 0;
          const Icon = item.type === 'work' ? FiBriefcase : FiBookOpen;

          return (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-10 flex items-start gap-6 md:mb-12 ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden flex-1 md:block" />

              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-light shadow-lg shadow-red/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                <Icon className="text-white" size={14} />
              </div>

              <div
                className={`glass flex-1 rounded-2xl p-6 md:max-w-[calc(50%-2rem)] ${
                  isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-red">
                  {item.period}
                </span>
                <h4 className="mt-1 font-display text-lg font-bold text-white">{item.role}</h4>
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-red-light hover:text-red hover:underline"
                  >
                    {item.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-red-light">{item.company}</p>
                )}
                <ul
                  className={`mt-3 space-y-1.5 text-sm text-gray-400 ${
                    isLeft ? 'md:text-right' : ''
                  }`}
                >
                  {item.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 md:items-center">
                      {!isLeft && (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red md:mt-0" />
                      )}
                      <span className="flex-1">{task}</span>
                      {isLeft && (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red md:mt-0 md:order-first" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
