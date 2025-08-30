import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Award, Users, Star } from 'lucide-react';

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The vision behind CodeWithHimanshu and the mission to make tech learning accessible to everyone.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
            
            <div className="relative flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src="/images/Profile Image Black & White.jpeg"
                      alt="Himanshu Vishwakarma"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl border-4 border-gray-900"
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-grow text-center lg:text-left"
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold text-white mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Himanshu Vishwakarma
                </motion.h3>
                
                <motion.p 
                  className="text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Software Developer & Founder
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.3 }}
                >
                  Passionate about building tools for learners to upskill in modern web development. 
                  Creator of CodeWithHimanshu to make tech learning accessible, engaging, and 
                  community-driven. With years of experience in full-stack development, I believe 
                  in the power of interactive learning and hands-on practice.
                </motion.p>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Users, value: '50K+', label: 'Students Taught', color: 'from-blue-400 to-cyan-400' },
                    { icon: Award, value: '25K+', label: 'Certificates Issued', color: 'from-purple-400 to-pink-400' },
                    { icon: Star, value: '4.9', label: 'Average Rating', color: 'from-yellow-400 to-orange-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/himanshuvishwakarma", color: "hover:bg-gray-700" },
                    { icon: Linkedin, href: "https://linkedin.com/in/himanshuvishwakarma", color: "hover:bg-blue-600" },
                    { icon: Twitter, href: "https://twitter.com/himanshuvishwakarma", color: "hover:bg-blue-400" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white border border-gray-700 hover:border-gray-600 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
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