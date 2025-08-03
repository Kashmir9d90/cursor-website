import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiHeart } from 'react-icons/fi';

const About = () => {
  const aboutSections = [
    {
      icon: FiUser,
      title: "Professional Background",
      content: "I'm a passionate software engineer with over 5 years of experience in building scalable web applications. I specialize in modern JavaScript frameworks, cloud technologies, and creating exceptional user experiences. My journey in tech started with a curiosity about how things work on the web, which led me to pursue a degree in Computer Science and eventually work with cutting-edge technologies."
    },
    {
      icon: FiTarget,
      title: "Professional Goals",
      content: "My goal is to continue growing as a full-stack developer while contributing to meaningful projects that solve real-world problems. I'm passionate about clean code, performance optimization, and staying up-to-date with the latest industry trends. I aspire to lead technical teams and mentor junior developers while building innovative solutions."
    },
    {
      icon: FiHeart,
      title: "Personal Interests",
      content: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and tech talks. I enjoy hiking, reading tech blogs, and experimenting with new programming languages and frameworks. I believe in continuous learning and pushing the boundaries of what's possible in software development."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Get to know me better - my background, goals, and what drives me in the world of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-100 rounded-full">
                  <section.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {section.title}
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-secondary-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-secondary-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-secondary-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-secondary-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 