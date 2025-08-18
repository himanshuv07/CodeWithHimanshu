import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Play, BookOpen, Trophy, Star, ArrowRight } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import FounderSection from '../components/FounderSection';
import { categories } from '../data/categories';

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDifficulty === 'All' || category.difficulty === selectedDifficulty)
  );

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500 rounded-full blur-xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Code</span>
              <span className="text-gray-900 dark:text-white">With</span>
              <span className="gradient-text">Himanshu</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master programming languages through interactive quizzes, comprehensive notes, and hands-on practice. 
              Level up your coding skills with our engaging learning platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCategories}
                className="btn-primary flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning</span>
              </motion.button>
              <Link
                to="/notes"
                className="btn-secondary flex items-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Browse Notes</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interactive Quizzes</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Test your knowledge with engaging, timed quizzes</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Notes</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Study from curated, official documentation</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Track Progress</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Monitor your learning journey and achievements</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="categories-section" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            <div className="flex space-x-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    selectedDifficulty === difficulty
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCategories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No technologies found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose CodeWithHimanshu?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Our platform offers a comprehensive learning experience designed to help you succeed in your programming journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Feedback",
                description: "Get instant feedback on your answers with detailed explanations",
                icon: "⚡",
                color: "bg-yellow-100 dark:bg-yellow-900"
              },
              {
                title: "Progress Tracking",
                description: "Monitor your improvement with detailed analytics and insights",
                icon: "📊",
                color: "bg-green-100 dark:bg-green-900"
              },
              {
                title: "Official Sources",
                description: "All content is curated from official documentation and best practices",
                icon: "📚",
                color: "bg-blue-100 dark:bg-blue-900"
              },
              {
                title: "Mobile Friendly",
                description: "Learn anywhere, anytime with our responsive design",
                icon: "📱",
                color: "bg-purple-100 dark:bg-purple-900"
              },
              {
                title: "Community",
                description: "Join a community of learners and compete on leaderboards",
                icon: "👥",
                color: "bg-pink-100 dark:bg-pink-900"
              },
              {
                title: "Free Forever",
                description: "Access to core features is completely free, no hidden costs",
                icon: "💎",
                color: "bg-indigo-100 dark:bg-indigo-900"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already improving their coding skills with our platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCategories}
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;