import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiHeart } from 'react-icons/fi';

const About = () => {
  const aboutSections = [
    {
      icon: FiUser,
      title: "Professional Background",
      content: "Engineering leader with a passion for enabling teams to deliver their best work by aligning systems, processes, and individuals for sustainable, high-quality outcomes. Experienced in managing engineering organizations, developing scalable systems, and fostering development environments that amplify team productivity and reduce friction. Adept at bridging technical execution with business objectives, with hands-on expertise in software development, cloud infrastructure, and process optimization. Proven ability to lead teams across startup and enterprise environments, ensuring that what is built today accelerates what’s possible tomorrow."
    },
    {
      icon: FiTarget,
      title: "Professional Goals",
      content: "My goal is to continue to grow my experience and expertise in leading engineering teams by taking on new and greater challenges and mastering new technologies and methodologies while delivering functional, high-quality products along the way. "
    },
    {
      icon: FiHeart,
      title: "Personal Interests",
      content: [
        "Craft hobbies – primarily woodworking and leatherworking",
        "Hobby-scale electronics (Arduino, Raspberry PI) – home automation, LED art, etc.",
        "Cooking, bread baking",
        "Music – piano, voice"
      ]
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
              {Array.isArray(section.content) ? (
                <ul className="text-secondary-700 leading-relaxed text-left space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-secondary-700 leading-relaxed">
                  {section.content}
                </p>
              )}
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