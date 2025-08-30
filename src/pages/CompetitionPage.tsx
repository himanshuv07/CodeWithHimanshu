import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Star, Zap, Target, Award, Calendar, Gift } from 'lucide-react';

interface Competition {
  id: string;
  title: string;
  description: string;
  prize: string;
  participants: number;
  timeLeft: string;
  difficulty: string;
  category: string;
  status: 'upcoming' | 'active' | 'ended';
  startDate: string;
  endDate: string;
}

const CompetitionPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const competitions: Competition[] = [
    {
      id: '1',
      title: 'React Mastery Challenge',
      description: 'Test your React skills with advanced hooks, state management, and performance optimization challenges.',
      prize: '$500 + Certificate',
      participants: 1247,
      timeLeft: '5 days 12 hours',
      difficulty: 'Advanced',
      category: 'React',
      status: 'active',
      startDate: 'Jan 15, 2024',
      endDate: 'Jan 30, 2024'
    },
    {
      id: '2',
      title: 'JavaScript Algorithm Sprint',
      description: 'Solve complex algorithms and data structure problems using pure JavaScript. Perfect for interview preparation.',
      prize: '$300 + Mentorship',
      participants: 892,
      timeLeft: '2 days 8 hours',
      difficulty: 'Intermediate',
      category: 'JavaScript',
      status: 'active',
      startDate: 'Jan 20, 2024',
      endDate: 'Jan 25, 2024'
    },
    {
      id: '3',
      title: 'Full-Stack Developer Championship',
      description: 'Build a complete web application using React, Node.js, and MongoDB. Showcase your full-stack skills.',
      prize: '$1000 + Job Referrals',
      participants: 2156,
      timeLeft: 'Starts in 3 days',
      difficulty: 'Expert',
      category: 'Full-Stack',
      status: 'upcoming',
      startDate: 'Feb 1, 2024',
      endDate: 'Feb 15, 2024'
    },
    {
      id: '4',
      title: 'CSS Design Battle',
      description: 'Create stunning UI components and animations using only CSS. Show off your design and animation skills.',
      prize: '$200 + Design Tools',
      participants: 567,
      timeLeft: 'Ended',
      difficulty: 'Intermediate',
      category: 'CSS',
      status: 'ended',
      startDate: 'Dec 15, 2023',
      endDate: 'Dec 30, 2023'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', score: 2847, avatar: '👨‍💻', badge: 'React Master' },
    { rank: 2, name: 'Sarah Kim', score: 2756, avatar: '👩‍💻', badge: 'JS Ninja' },
    { rank: 3, name: 'Mike Johnson', score: 2634, avatar: '👨‍🎓', badge: 'Full-Stack Pro' },
    { rank: 4, name: 'Emma Davis', score: 2521, avatar: '👩‍🚀', badge: 'CSS Artist' },
    { rank: 5, name: 'David Wilson', score: 2398, avatar: '👨‍🔬', badge: 'Algorithm Expert' }
  ];

  const tabs = [
    { id: 'active', label: 'Active', count: 2 },
    { id: 'upcoming', label: 'Upcoming', count: 1 },
    { id: 'ended', label: 'Past', count: 1 }
  ];

  const filteredCompetitions = competitions.filter(comp => comp.status === selectedTab);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'from-green-400 to-emerald-500';
      case 'intermediate': return 'from-yellow-400 to-orange-500';
      case 'advanced': return 'from-red-400 to-pink-500';
      case 'expert': return 'from-purple-400 to-indigo-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'from-green-400 to-emerald-500';
      case 'upcoming': return 'from-blue-400 to-cyan-500';
      case 'ended': return 'from-gray-400 to-gray-500';
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
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Competitions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compete with developers worldwide, win prizes, and showcase your skills in exciting coding challenges
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Trophy, label: 'Total Prizes', value: '$50K+', color: 'from-yellow-400 to-orange-500' },
            { icon: Users, label: 'Participants', value: '25.3K', color: 'from-blue-400 to-cyan-400' },
            { icon: Zap, label: 'Active Contests', value: '12', color: 'from-purple-400 to-pink-400' },
            { icon: Award, label: 'Winners', value: '1.2K', color: 'from-green-400 to-emerald-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competitions List */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-900 rounded-xl p-1 border border-gray-800">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {tab.label} ({tab.count})
                </motion.button>
              ))}
            </div>

            {/* Competitions */}
            <div className="space-y-6">
              {filteredCompetitions.map((competition, index) => (
                <motion.div
                  key={competition.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-gray-900 rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {competition.title}
                          </h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(competition.status)} rounded-full text-xs font-bold text-white`}>
                            {competition.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {competition.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-1">
                          <Gift className="w-4 h-4" />
                          <span className="text-xs font-medium">PRIZE</span>
                        </div>
                        <p className="text-white font-semibold">{competition.prize}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
                          <Users className="w-4 h-4" />
                          <span className="text-xs font-medium">PARTICIPANTS</span>
                        </div>
                        <p className="text-white font-semibold">{competition.participants.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 text-green-400 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-medium">TIME LEFT</span>
                        </div>
                        <p className="text-white font-semibold">{competition.timeLeft}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 text-purple-400 mb-1">
                          <Target className="w-4 h-4" />
                          <span className="text-xs font-medium">LEVEL</span>
                        </div>
                        <span className={`px-2 py-1 bg-gradient-to-r ${getDifficultyColor(competition.difficulty)} rounded-full text-xs font-bold text-white`}>
                          {competition.difficulty}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                        competition.status === 'active'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/25'
                          : competition.status === 'upcoming'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={competition.status === 'ended'}
                    >
                      {competition.status === 'active' ? 'Join Competition' : 
                       competition.status === 'upcoming' ? 'Register Now' : 'Competition Ended'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-6 sticky top-8"
            >
              <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>Global Leaderboard</span>
              </h2>
              
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <motion.div
                    key={user.rank}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center space-x-3 p-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                      user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900' :
                      user.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg">
                      {user.avatar}
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400">{user.badge}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-400">{user.score.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                View Full Leaderboard
              </motion.button>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-gray-900 rounded-2xl border border-gray-800 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>Upcoming Events</span>
              </h3>
              
              <div className="space-y-3">
                {[
                  { event: 'Weekly Code Review', date: 'Tomorrow 6 PM', color: 'from-blue-400 to-cyan-400' },
                  { event: 'Algorithm Workshop', date: 'Jan 28, 2024', color: 'from-green-400 to-emerald-400' },
                  { event: 'Career Guidance Session', date: 'Feb 2, 2024', color: 'from-purple-400 to-pink-400' }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${event.color} rounded-full group-hover:scale-125 transition-transform duration-300`} />
                    <div className="flex-grow">
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {event.event}
                      </p>
                      <p className="text-xs text-gray-400">{event.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Competition Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-400" />
            <span>Competition Rules & Guidelines</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Participation Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Must be registered on the platform</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Complete profile verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Follow community guidelines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span>Submit solutions within time limits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-4">Judging Criteria</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Code quality and best practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span>Performance and optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span>Creativity and innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full" />
                  <span>Problem-solving approach</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitionPage;