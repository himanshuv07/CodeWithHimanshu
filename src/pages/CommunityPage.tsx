import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, User, Clock, Star } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  category: string;
}

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: '👩‍💻',
      content: 'Just completed the React quiz and scored 95%! The explanations were incredibly helpful. Thanks CodeWithHimanshu for making learning so engaging!',
      timestamp: '2 hours ago',
      likes: 24,
      replies: 5,
      category: 'React'
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: '👨‍💼',
      content: 'The JavaScript fundamentals section is pure gold. I finally understand closures and async/await properly. Highly recommend this platform to anyone starting their coding journey.',
      timestamp: '4 hours ago',
      likes: 18,
      replies: 3,
      category: 'JavaScript'
    },
    {
      id: 3,
      author: 'Priya Sharma',
      avatar: '👩‍🎓',
      content: 'Love the certificate feature! Just earned my Web Development certificate after scoring 92% on the combined quiz. Feeling proud and motivated to learn more!',
      timestamp: '1 day ago',
      likes: 31,
      replies: 8,
      category: 'Certificates'
    },
    {
      id: 4,
      author: 'Alex Rodriguez',
      avatar: '👨‍🔬',
      content: 'The study notes are so well organized and comprehensive. I use them as my go-to reference while working on projects. Keep up the amazing work!',
      timestamp: '2 days ago',
      likes: 15,
      replies: 2,
      category: 'Study Notes'
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = ['General', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Certificates', 'Study Notes'];

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
        category: selectedCategory
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Community Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with fellow learners, share your progress, and get inspired by the community!
          </p>
        </motion.div>

        {/* Post Creation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Share Your Experience
          </h2>
          
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
            />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!newPost.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Share Post
            </motion.button>
          </form>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2,847</h3>
            <p className="text-gray-600 dark:text-gray-400">Active Learners</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,234</h3>
            <p className="text-gray-600 dark:text-gray-400">Discussions</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4.9</h3>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xl">
                  {post.avatar}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {post.author}
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.timestamp}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </motion.button>
                    
                    <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span>{post.replies}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Community Guidelines
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Be respectful and supportive to fellow learners</li>
            <li>• Share constructive feedback and helpful resources</li>
            <li>• Keep discussions relevant to programming and learning</li>
            <li>• No spam, self-promotion, or inappropriate content</li>
            <li>• Help create a positive learning environment for everyone</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage;