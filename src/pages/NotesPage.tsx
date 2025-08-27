import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
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

  const sidebarItems = [
    {
      title: 'Introduction to C++',
      items: [
        'Overview',
        'History',
        'Features',
        'Applications'
      ]
    },
    {
      title: 'Getting Started',
      items: [
        'Installation',
        'IDE Setup',
        'First Program',
        'Compilation Process'
      ]
    },
    {
      title: 'Basic Syntax',
      items: [
        'Variables',
        'Data Types',
        'Operators',
        'Control Structures'
      ]
    },
    {
      title: 'Object-Oriented Programming',
      items: [
        'Classes and Objects',
        'Inheritance',
        'Polymorphism',
        'Encapsulation'
      ]
    },
    {
      title: 'Advanced Topics',
      items: [
        'Templates',
        'STL',
        'Exception Handling',
        'File I/O'
      ]
    },
    {
      title: 'Memory Management',
      items: [
        'Pointers',
        'Dynamic Allocation',
        'Smart Pointers',
        'Memory Leaks'
      ]
    },
    {
      title: 'Best Practices',
      items: [
        'Coding Standards',
        'Performance Tips',
        'Debugging',
        'Testing'
      ]
    }
  ];

  const tableOfContents = [
    'The Origin Story: A Blast from the Past',
    'The Evolution: From Humble Beginnings to Global Dominance',
    'Why C++ Rocks: The Importance Unveiled',
    'Conclusion: The Adventure Continues'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 px-4 text-center relative">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span className="font-semibold">Raksha Bandhan</span>
          <span className="italic">SALE is LIVE</span>
          <span>Use discount code -</span>
          <span className="bg-black px-2 py-1 rounded font-mono">RAKSHA50</span>
          <span>and get upto</span>
          <span className="font-bold text-yellow-300">50% off</span>
          <span className="bg-green-600 px-2 py-1 rounded text-xs font-bold">RAKSHA50</span>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300">
          ×
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">{'<>'}</span>
              <span className="text-white ml-2">CODE</span>
              <span className="text-blue-400 ml-1">HELP</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Courses</a>
            <div className="relative group">
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Articles</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium transition-colors">
            Login
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-900 min-h-screen border-r border-gray-800">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-400">Back to Tutorials</span>
            </div>

            <h2 className="text-xl font-bold mb-6">Introduction to C++</h2>

            <div className="space-y-2">
              {sidebarItems.map((section, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSections.has(section.title) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.has(section.title) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          className="block w-full text-left p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          <div className="flex-1 p-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold mb-6">History of C++</h1>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Join me today as we embark on a journey through the corridors of time, exploring the fascinating 
                history of C++. From its humble beginnings to its current status as one of the most powerful and 
                widely used programming languages in the world, C++ has a story worth telling. So, grab your 
                favorite beverage, sit back, and let's dive into the fascinating world of C++!
              </p>

              {/* Featured Image */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h2 className="text-2xl font-bold mb-2">BRIEF HISTORY OF</h2>
                  <h1 className="text-4xl font-bold text-yellow-300">C++</h1>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-white">The Origin Story: A Blast from the Past</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The Origin Story is where we delve into the past and uncover the roots. Picture this: it's the early 1980s, 
                  and Bjarne Stroustrup, a Danish computer scientist working at Bell Labs, had a vision. He wanted to combine 
                  the efficiency and flexibility of the C programming language with features that would make it easier to write 
                  large programs.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  In 1979, Stroustrup began working on "C with Classes," which was essentially C enhanced with Simula-like 
                  features. Simula, developed in the 1960s, was one of the first object-oriented programming languages, and 
                  Stroustrup saw the potential of bringing its concepts to the more efficient C language.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-white">The Evolution: From Humble Beginnings to Global Dominance</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The name "C++" was introduced in 1983. The "++" operator in C means "increment," so C++ literally means 
                  "increment C" or "C plus plus." This name perfectly captured the language's evolution from C.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Throughout the 1980s and 1990s, C++ continued to evolve. The language was standardized by the International 
                  Organization for Standardization (ISO) in 1998, resulting in C++98. This was followed by several updates, 
                  including C++03, C++11, C++14, C++17, and C++20, each bringing new features and improvements.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-white">Why C++ Rocks: The Importance Unveiled</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  C++ has become one of the most important programming languages for several reasons:
                </p>

                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Performance: C++ offers excellent performance, making it ideal for system programming, game development, and applications where speed is crucial.</li>
                  <li>Versatility: It supports multiple programming paradigms, including procedural, object-oriented, and generic programming.</li>
                  <li>Large ecosystem: C++ has a vast standard library and numerous third-party libraries.</li>
                  <li>Industry adoption: Major companies and projects rely on C++ for critical systems.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion: The Adventure Continues</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  As we conclude our journey through the history of C++, it's clear that this language has come a long way from 
                  its humble beginnings as "C with Classes." Today, C++ continues to evolve and adapt to modern programming needs, 
                  ensuring its relevance for years to come.
                </p>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you're a seasoned developer or just starting your programming journey, understanding the history and 
                  evolution of C++ provides valuable context for appreciating this powerful language. The adventure continues, 
                  and C++ remains at the forefront of software development innovation.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <span>Previous</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="w-80 p-8 border-l border-gray-800">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold mb-6">On This Page</h3>
              <ul className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;