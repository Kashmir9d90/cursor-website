import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming Languages', category: 'programming' },
    { name: 'Domain Expertise', category: 'framework' },
    { name: 'Tools & Technologies', category: 'tool' },
    { name: 'Project Management & Leadership', category: 'soft' }
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSkillsByCategory(category.category).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="text-center">
                      <span className="font-medium text-secondary-900 text-lg">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 