import React from 'react';
import { motion } from 'framer-motion';
import { User, Trophy, Clock, BookOpen, Target, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Please sign in to view your profile.</p>
      </div>
    );
  }

  const mockStats = {
    totalQuizzes: 12,
    averageScore: 85,
    totalTime: '4h 30m',
    streak: 7,
    badges: ['HTML Master', 'CSS Expert', 'JavaScript Ninja'],
    recentActivity: [
      { quiz: 'React', score: 92, date: '2024-01-15' },
      { quiz: 'JavaScript', score: 88, date: '2024-01-14' },
      { quiz: 'CSS', score: 95, date: '2024-01-13' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Member since January 2024
                </span>
                <span className="flex items-center space-x-1 text-yellow-600 dark:text-yellow-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">{mockStats.streak} day streak</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Trophy,
                  title: 'Quizzes Completed',
                  value: mockStats.totalQuizzes,
                  color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                },
                {
                  icon: Target,
                  title: 'Average Score',
                  value: `${mockStats.averageScore}%`,
                  color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                },
                {
                  icon: Clock,
                  title: 'Total Time',
                  value: mockStats.totalTime,
                  color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                },
                {
                  icon: BookOpen,
                  title: 'Topics Mastered',
                  value: '8',
                  color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {mockStats.recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {activity.quiz} Quiz
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {activity.score}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Badges & Achievements */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Achievements</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Badges Earned
              </h3>
              <div className="space-y-3">
                {mockStats.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Progress Overview
              </h3>
              <div className="space-y-4">
                {[
                  { topic: 'HTML', progress: 95 },
                  { topic: 'CSS', progress: 88 },
                  { topic: 'JavaScript', progress: 82 },
                  { topic: 'React', progress: 75 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.topic}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;