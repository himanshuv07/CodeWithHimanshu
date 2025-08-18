import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Founder
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The vision behind CodeWithHimanshu and the mission to make tech learning accessible to everyone.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="/images/Profile Image Black & White.jpeg"
                      alt="Himanshu Vishwakarma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-grow text-center md:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Himanshu Vishwakarma
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-6 font-semibold">
                  Software Developer & Founder
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  Passionate about building tools for learners to upskill in modern web development. 
                  Creator of CodeWithHimanshu to make tech learning accessible, engaging, and 
                  community-driven. With years of experience in full-stack development, I believe 
                  in the power of interactive learning and hands-on practice.
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/himanshuvishwakarma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/himanshuvishwakarma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://twitter.com/himanshuvishwakarma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;