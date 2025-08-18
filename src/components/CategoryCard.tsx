import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy } from 'lucide-react';

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
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="category-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
    >
      <Link to={`/quiz/${category.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${category.color}`}
            >
              {category.icon}
            </div>
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(
                category.difficulty
              )}`}
            >
              {category.difficulty}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {category.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
            {category.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-1">
              <Trophy className="w-4 h-4" />
              <span>{category.questionsCount} questions</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{category.avgTime}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mt-2">
            <Users className="w-3 h-3" />
            <span>{category.completions.toLocaleString()} completions</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;