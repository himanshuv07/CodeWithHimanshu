import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917275223319', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our platform? Want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg"
              >
                <p className="text-green-800 dark:text-green-200">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full flex items-center space-x-4 p-4 whatsapp-btn text-white rounded-lg"
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">WhatsApp</p>
                    <p className="opacity-90">+91 7275223319</p>
                  </div>
                </motion.button>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">himanshu@codewithhimanshu.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/himanshuvishwakarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-8 h-8 text-gray-900 dark:text-white mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">GitHub</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/himanshuvishwakarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://twitter.com/himanshuvishwakarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <Twitter className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Twitter</span>
                </motion.a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="mb-4">
                Need immediate help? Use WhatsApp for the fastest response time!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;