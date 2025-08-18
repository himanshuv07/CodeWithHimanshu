import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, Trophy, Users, Star, Filter, Search } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  questions: number;
  difficulty: string;
  completions: number;
  rating: number;
  technologies: string[];
  category: string;
}

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const courses: Course[] = [
    {
      id: 'web-development',
      title: 'Complete Web Development',
      description: 'Master the fundamentals of web development with HTML, CSS, and JavaScript. Build responsive websites and interactive web applications.',
      icon: '🌐',
      color: 'bg-blue-100 dark:bg-blue-900',
      duration: '45 min',
      questions: 60,
      difficulty: 'Beginner',
      completions: 8420,
      rating: 4.8,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Frontend'
    },
    {
      id: 'react-mastery',
      title: 'React Mastery',
      description: 'Deep dive into React ecosystem including hooks, state management, routing, and modern React patterns for building scalable applications.',
      icon: '⚛️',
      color: 'bg-cyan-100 dark:bg-cyan-900',
      duration: '60 min',
      questions: 80,
      difficulty: 'Intermediate',
      completions: 5230,
      rating: 4.9,
      technologies: ['React', 'JavaScript', 'JSX'],
      category: 'Frontend'
    },
    {
      id: 'backend-fundamentals',
      title: 'Backend Development',
      description: 'Learn server-side development with Node.js, Express, and database integration. Build robust APIs and web services.',
      icon: '🔧',
      color: 'bg-green-100 dark:bg-green-900',
      duration: '75 min',
      questions: 90,
      difficulty: 'Intermediate',
      completions: 3840,
      rating: 4.7,
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'Backend'
    },
    {
      id: 'python-programming',
      title: 'Python Programming',
      description: 'Comprehensive Python course covering basics to advanced concepts including OOP, data structures, and popular libraries.',
      icon: '🐍',
      color: 'bg-yellow-100 dark:bg-yellow-900',
      duration: '90 min',
      questions: 100,
      difficulty: 'Beginner',
      completions: 12500,
      rating: 4.8,
      technologies: ['Python', 'OOP', 'Data Structures'],
      category: 'Programming'
    },
    {
      id: 'typescript-advanced',
      title: 'Advanced TypeScript',
      description: 'Master TypeScript with advanced types, generics, decorators, and integration with modern frameworks.',
      icon: '📘',
      color: 'bg-blue-100 dark:bg-blue-900',
      duration: '50 min',
      questions: 70,
      difficulty: 'Advanced',
      completions: 2100,
      rating: 4.9,
      technologies: ['TypeScript', 'JavaScript', 'Types'],
      category: 'Programming'
    },
    {
      id: 'database-mastery',
      title: 'Database Management',
      description: 'Learn both SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB, and database design principles.',
      icon: '🗃️',
      color: 'bg-purple-100 dark:bg-purple-900',
      duration: '65 min',
      questions: 85,
      difficulty: 'Intermediate',
      completions: 4650,
      rating: 4.6,
      technologies: ['SQL', 'MongoDB', 'Database Design'],
      category: 'Backend'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Programming'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '30-45 min', '45-60 min', '60+ min'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    
    let matchesDuration = true;
    if (selectedDuration !== 'All') {
      const duration = parseInt(course.duration);
      if (selectedDuration === '30-45 min') matchesDuration = duration >= 30 && duration <= 45;
      else if (selectedDuration === '45-60 min') matchesDuration = duration > 45 && duration <= 60;
      else if (selectedDuration === '60+ min') matchesDuration = duration > 60;
    }
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take your skills to the next level with our comprehensive courses. Complete quizzes, earn certificates, and track your progress.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
            
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 ${course.color} flex items-center justify-center text-4xl`}>
                {course.icon}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{course.questions} questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.completions.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <Link
                  to={`/quiz/${course.id}`}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Course</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No courses found matching your criteria.
            </p>
          </div>
        )}

        {/* Certificate Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Earn Your Certificate</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Score 90% or higher on any course quiz to earn a professional certificate that you can download and share.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold">90%+</div>
              <div className="text-sm opacity-90">Required Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm opacity-90">Retry Attempts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">📜</div>
              <div className="text-sm opacity-90">Downloadable</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;