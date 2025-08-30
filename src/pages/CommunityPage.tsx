import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, User, Clock, Star, TrendingUp, Award, Users, Eye } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  category: string;
  views: number;
  isVerified?: boolean;
}

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: '👩‍💻',
      content: 'Just completed the React quiz and scored 95%! The explanations were incredibly helpful. The way complex concepts like useEffect and custom hooks are explained makes it so easy to understand. Thanks CodeWithHimanshu for making learning so engaging! 🚀',
      timestamp: '2 hours ago',
      likes: 124,
      replies: 15,
      category: 'React',
      views: 1250,
      isVerified: true
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: '👨‍💼',
      content: 'The JavaScript fundamentals section is pure gold! I finally understand closures, async/await, and the event loop properly. The interactive examples and real-world scenarios make all the difference. Highly recommend this platform to anyone starting their coding journey. The certificate system is also amazing! 💯',
      timestamp: '4 hours ago',
      likes: 89,
      replies: 23,
      category: 'JavaScript',
      views: 890,
      isVerified: false
    },
    {
      id: 3,
      author: 'Priya Sharma',
      avatar: '👩‍🎓',
      content: 'Love the certificate feature! Just earned my Web Development certificate after scoring 92% on the combined quiz. The certificate looks professional and I\'ve already added it to my LinkedIn profile. Feeling proud and motivated to learn more technologies! 🏆',
      timestamp: '1 day ago',
      likes: 156,
      replies: 31,
      category: 'Certificates',
      views: 2100,
      isVerified: true
    },
    {
      id: 4,
      author: 'Alex Rodriguez',
      avatar: '👨‍🔬',
      content: 'The study notes are so well organized and comprehensive. I use them as my go-to reference while working on projects. The code examples are practical and the explanations are clear. Keep up the amazing work! The dark theme is perfect for late-night coding sessions. 🌙',
      timestamp: '2 days ago',
      likes: 67,
      replies: 12,
      category: 'Study Notes',
      views: 670,
      isVerified: false
    },
    {
      id: 5,
      author: 'Emma Wilson',
      avatar: '👩‍🚀',
      content: 'The TypeScript advanced course blew my mind! The way generics and advanced types are explained with real-world examples is phenomenal. I went from being confused about TypeScript to confidently using it in production. The quiz questions are challenging but fair. 🔥',
      timestamp: '3 days ago',
      likes: 203,
      replies: 45,
      category: 'TypeScript',
      views: 3200,
      isVerified: true
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = ['General', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'Certificates', 'Study Notes'];

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: 'You',
        avatar: '👤',
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        replies: 0,
        category: selectedCategory,
        views: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Community Hub
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with fellow learners, share your progress, and get inspired by the community!
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, label: 'Active Members', value: '15.2K', color: 'from-blue-400 to-cyan-400' },
            { icon: MessageSquare, label: 'Discussions', value: '3.4K', color: 'from-green-400 to-emerald-400' },
            { icon: TrendingUp, label: 'Success Stories', value: '892', color: 'from-purple-400 to-pink-400' },
            { icon: Award, label: 'Certificates Earned', value: '5.7K', color: 'from-yellow-400 to-orange-400' }
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

        {/* Post Creation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 rounded-2xl border border-gray-800 p-6 mb-8 hover:border-gray-700 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span>Share Your Experience</span>
          </h2>
          
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 hover:border-gray-600"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your learning experience, ask questions, or give feedback..."
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-gray-600"
            />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!newPost.trim()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Share Post
            </motion.button>
          </form>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-900 rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl shadow-lg"
                >
                  {post.avatar}
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {post.author}
                      </h3>
                      {post.isVerified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className="group/btn flex items-center space-x-2 text-gray-500 hover:text-red-400 transition-colors duration-300"
                    >
                      <Heart className="w-5 h-5 group-hover/btn:fill-current" />
                      <span className="font-medium">{post.likes}</span>
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors duration-300"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-medium">{post.replies}</span>
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors duration-300"
                    >
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Share</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trending Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <span>Trending Topics</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { topic: 'React Hooks Best Practices', posts: 45, color: 'from-cyan-400 to-blue-500' },
              { topic: 'JavaScript Performance Tips', posts: 32, color: 'from-yellow-400 to-orange-500' },
              { topic: 'TypeScript Advanced Patterns', posts: 28, color: 'from-blue-400 to-indigo-500' }
            ].map((trend, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${trend.color} rounded-full mb-3 group-hover:h-3 transition-all duration-300`} />
                <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {trend.topic}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {trend.posts} active discussions
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800/30"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Community Guidelines</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Be respectful and supportive to fellow learners</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Share constructive feedback and helpful resources</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Keep discussions relevant to programming and learning</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full" />
                <span>No spam, self-promotion, or inappropriate content</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Help create a positive learning environment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Celebrate achievements and milestones together</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage;