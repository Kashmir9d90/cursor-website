import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-secondary-300">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-secondary-300">
              Made with Cursor & React & TypeScript. Mainly Cursor, I don't really know much React or TS.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end space-x-4"
          >
            <motion.a
              href={personalInfo.socialLinks.linkedin}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href={personalInfo.socialLinks.github}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            
            {personalInfo.socialLinks.twitter && (
              <motion.a
                href={personalInfo.socialLinks.twitter}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-secondary-800"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary-300 hover:text-white transition-colors duration-200"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 