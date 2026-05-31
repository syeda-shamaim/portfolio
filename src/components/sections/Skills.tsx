import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading';
import { SkillBar } from '../ui/SkillBar';
import { SkillRadial } from '../ui/SkillRadial';

const categories = [...new Set(skills.map((s) => s.category))];

export function Skills() {
  const topSkills = skills.slice(0, 6);

  return (
    <AnimatedSection id="skills" className="relative overflow-hidden bg-black-muted/45">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-light/5 blur-3xl"
        aria-hidden="true"
      />

      <SectionHeading
        subtitle="Expertise"
        title="Skills & Proficiency"
        description="Technologies and tools I use to bring ideas to life"
      />

      <div className="mb-16 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {topSkills.map((skill, i) => (
          <SkillRadial key={skill.name} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {categories.map((category, ci) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="mb-6 font-display text-lg font-semibold text-white">{category}</h3>
              <div className="space-y-5">
                {categorySkills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-3"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.1, y: -3 }}
            className="cursor-default rounded-full border border-red/20 bg-red/5 px-4 py-2 text-sm font-medium text-red transition-shadow hover:shadow-md hover:shadow-red/20"
            style={{
              fontSize: `${0.75 + (skill.level / 100) * 0.35}rem`,
            }}
            title={`${skill.name}: ${skill.level}%`}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
