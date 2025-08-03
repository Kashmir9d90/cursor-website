import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50 pt-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-black"
              >
                Hi, I'm{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl md:text-4xl text-black font-semibold"
              >
                {personalInfo.title}
              </motion.h2>
              
              {/* Zen Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-2xl"
              >
                <blockquote className="text-xl text-black italic border-l-4 border-secondary-400 pl-4 py-2 bg-secondary-100 rounded-r-lg">
                  "Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water."
                  <footer className="text-sm text-gray-700 mt-2">— Zen Kōan</footer>
                </blockquote>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-black max-w-2xl"
              >
                {personalInfo.summary}
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-4 text-gray-800"
            >
              <span className="flex items-center space-x-2">
                <FiMail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2"
                onClick={() => scrollToSection('contact')}
              >
                <FiMail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
                onClick={() => scrollToSection('projects')}
              >
                <span>View Projects</span>
              </motion.button>
              
              <motion.a
                href={personalInfo.resumeUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex space-x-4"
            >
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-primary-600 hover:text-primary-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href={personalInfo.socialLinks.github}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-secondary-700 hover:text-secondary-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
              
              {personalInfo.socialLinks.twitter && (
                <motion.a
                  href={personalInfo.socialLinks.twitter}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-blue-500 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter className="w-6 h-6" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-20"
              />
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/320x320/3b82f6/ffffff?text=JD';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 