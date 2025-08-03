import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { education } from '../data/education';

const Education = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Institution Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary-100 rounded-full">
                      <FiAward className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">
                        {edu.institution}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-secondary-600">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">GPA:</span>
                        <span>{edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2">
                  {edu.description && (
                    <p className="text-secondary-700 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  
                  {/* Relevant Coursework */}
                  {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCoursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
            <div className="text-secondary-600">Degrees & Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.0</div>
            <div className="text-secondary-600">Academic Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-secondary-600">Relevant Courses</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 