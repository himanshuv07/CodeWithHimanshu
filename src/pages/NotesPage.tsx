import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';
import { studyNotes } from '../data/studyNotes';

const NotesPage: React.FC = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'html');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basics']));

  const currentNotes = studyNotes[selectedCategory as keyof typeof studyNotes];
  const currentCategoryData = categories.find(cat => cat.id === selectedCategory);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Study Notes
              </h2>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
              />
            </div>

            <div className="space-y-1">
              {filteredCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="font-medium">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {currentNotes && currentCategoryData ? (
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${currentCategoryData.color}`}>
                    {currentCategoryData.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {currentCategoryData.name} Study Notes
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {currentCategoryData.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {currentNotes.sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      {expandedSections.has(section.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {expandedSections.has(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="p-6 pt-0">
                          <div className="prose prose-blue dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 mb-6 mt-6">
                              {section.description}
                            </p>
                            
                            {section.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                  {topic.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  {topic.content}
                                </p>
                                
                                {topic.example && (
                                  <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                      Example:
                                    </h4>
                                    <div className="syntax-highlight">
                                      <pre className="text-sm overflow-x-auto">
                                        <code>{topic.example}</code>
                                      </pre>
                                    </div>
                                  </div>
                                )}
                                
                                {topic.points && topic.points.length > 0 && (
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                    {topic.points.map((point, pointIndex) => (
                                      <li key={pointIndex}>{point}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Study notes for this topic are coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;