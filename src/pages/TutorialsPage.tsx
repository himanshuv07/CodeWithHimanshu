import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, Play, BookOpen, Code, Zap } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: string;
  rating: number;
  category: string;
  author: string;
  tags: string[];
}

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Complete React Hooks Guide',
      description: 'Master React Hooks with practical examples, custom hooks, and advanced patterns. Learn useState, useEffect, useContext, and more.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '2h 30m',
      level: 'Intermediate',
      students: '12.5k',
      rating: 4.9,
      category: 'React',
      author: 'Himanshu Vishwakarma',
      tags: ['React', 'Hooks', 'JavaScript', 'Frontend']
    },
    {
      id: '2',
      title: 'JavaScript ES6+ Masterclass',
      description: 'Deep dive into modern JavaScript features including arrow functions, destructuring, async/await, modules, and more.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '3h 15m',
      level: 'Beginner',
      students: '18.2k',
      rating: 4.8,
      category: 'JavaScript',
      author: 'Himanshu Vishwakarma',
      tags: ['JavaScript', 'ES6', 'Modern JS', 'Programming']
    },
    {
      id: '3',
      title: 'Node.js API Development',
      description: 'Build scalable REST APIs with Node.js, Express, and MongoDB. Learn authentication, middleware, and deployment.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '4h 45m',
      level: 'Advanced',
      students: '8.7k',
      rating: 4.7,
      category: 'Backend',
      author: 'Himanshu Vishwakarma',
      tags: ['Node.js', 'Express', 'MongoDB', 'API']
    },
    {
      id: '4',
      title: 'CSS Grid & Flexbox Mastery',
      description: 'Master modern CSS layout techniques with Grid and Flexbox. Create responsive designs with ease.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '1h 45m',
      level: 'Intermediate',
      students: '15.3k',
      rating: 4.9,
      category: 'CSS',
      author: 'Himanshu Vishwakarma',
      tags: ['CSS', 'Grid', 'Flexbox', 'Layout']
    },
    {
      id: '5',
      title: 'Python Data Structures',
      description: 'Comprehensive guide to Python data structures including lists, dictionaries, sets, and advanced collections.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '2h 20m',
      level: 'Beginner',
      students: '22.1k',
      rating: 4.8,
      category: 'Python',
      author: 'Himanshu Vishwakarma',
      tags: ['Python', 'Data Structures', 'Programming', 'Algorithms']
    },
    {
      id: '6',
      title: 'TypeScript Advanced Types',
      description: 'Master TypeScript with advanced types, generics, utility types, and complex type manipulations.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      duration: '3h 30m',
      level: 'Advanced',
      students: '6.4k',
      rating: 4.9,
      category: 'TypeScript',
      author: 'Himanshu Vishwakarma',
      tags: ['TypeScript', 'Types', 'Generics', 'Advanced']
    }
  ];

  const categories = ['All', 'React', 'JavaScript', 'Backend', 'CSS', 'Python', 'TypeScript'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || tutorial.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'from-green-400 to-emerald-500';
      case 'intermediate': return 'from-yellow-400 to-orange-500';
      case 'advanced': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Step-by-step video tutorials to master programming concepts and build real-world projects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900 rounded-2xl border border-gray-800 p-6 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Filter Tutorials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 hover:border-gray-600"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 hover:border-gray-600"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getLevelColor(tutorial.level)} rounded-full text-xs font-bold text-white shadow-lg`}>
                    {tutorial.level}
                  </span>
                </div>
              </div>
              
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                    {tutorial.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400">{tutorial.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {tutorial.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tutorial.students}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">by {tutorial.author}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch Tutorial</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              🔥 Most Popular This Week
            </h2>
            <p className="text-gray-400">
              Trending tutorials that developers are loving right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Building a Full-Stack App with React & Node.js',
                views: '45.2k',
                duration: '6h 30m',
                icon: Code,
                color: 'from-blue-400 to-cyan-400'
              },
              {
                title: 'Advanced TypeScript Patterns & Best Practices',
                views: '32.1k',
                duration: '4h 15m',
                icon: Zap,
                color: 'from-purple-400 to-pink-400'
              }
            ].map((featured, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${featured.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <featured.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {featured.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                      <span>{featured.views} views</span>
                      <span>{featured.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorialsPage;