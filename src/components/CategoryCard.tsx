import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, ArrowRight, Star } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  difficulty: string;
  questionsCount: number;
  avgTime: string;
  completions: number;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'intermediate':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'advanced':
        return 'bg-gradient-to-r from-red-400 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  const getCardGradient = (categoryName: string) => {
    const gradients = {
      'HTML': 'from-orange-500 to-red-500',
      'CSS': 'from-blue-500 to-cyan-500',
      'JavaScript': 'from-yellow-500 to-orange-500',
      'React': 'from-cyan-500 to-blue-500',
      'Node.js': 'from-green-500 to-emerald-500',
      'Python': 'from-blue-500 to-indigo-500',
      'TypeScript': 'from-blue-600 to-indigo-600',
      'Vue.js': 'from-green-500 to-teal-500',
      'Angular': 'from-red-500 to-pink-500',
      'MongoDB': 'from-green-600 to-lime-600',
      'SQL': 'from-gray-500 to-slate-600',
      'Git': 'from-orange-500 to-red-600'
    };
    return gradients[categoryName as keyof typeof gradients] || 'from-purple-500 to-pink-500';
  };

  return (
    <motion.div
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCardGradient(category.name)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${getCardGradient(category.name)} blur-xl opacity-20`} />
      </div>

      <Link to={`/quiz/${category.id}`} className="relative block h-full p-6">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 bg-gradient-to-br ${getCardGradient(category.name)} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              {category.icon}
            </motion.div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(category.difficulty)} shadow-lg`}>
              {category.difficulty}
            </span>
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {category.name}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {category.description}
            </p>
          </div>
          
          {/* Stats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4" />
                <span>{category.questionsCount} questions</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{category.avgTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{category.completions.toLocaleString()} completions</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>4.8</span>
              </div>
            </div>
            
            {/* Action Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 pt-4 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <span className="font-medium">Start Quiz</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;