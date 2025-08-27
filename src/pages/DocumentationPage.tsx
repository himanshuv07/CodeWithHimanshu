import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['oop']));
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sidebarItems = [
    {
      id: 'intro',
      title: 'Introduction to C++',
      items: [
        'Overview',
        'History', 
        'Features',
        'Applications'
      ]
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        'Installation',
        'IDE Setup',
        'First Program',
        'Compilation Process'
      ]
    },
    {
      id: 'basic-syntax',
      title: 'Basic Syntax',
      items: [
        'Variables',
        'Data Types',
        'Operators',
        'Control Structures'
      ]
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      items: [
        'Classes and Objects',
        'Inheritance',
        'Polymorphism',
        'Encapsulation'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      items: [
        'Templates',
        'STL',
        'Exception Handling',
        'File I/O'
      ]
    },
    {
      id: 'memory',
      title: 'Memory Management',
      items: [
        'Pointers',
        'Dynamic Allocation',
        'Smart Pointers',
        'Memory Leaks'
      ]
    }
  ];

  const tableOfContents = [
    'Example: Managing Multiple Students data',
    'What is OOP?',
    'Objects and Classes',
    'Attributes and Behaviours',
    'Conclusion'
  ];

  const codeExample = `#include <iostream>
#include <string>
#include <vector>

class Student {
private:
    std::string name;
    int age;
    std::string studentId;
    std::vector<double> grades;

public:
    // Constructor
    Student(std::string n, int a, std::string id) 
        : name(n), age(a), studentId(id) {}
    
    // Method to add grade
    void addGrade(double grade) {
        grades.push_back(grade);
    }
    
    // Method to calculate average
    double calculateAverage() {
        if (grades.empty()) return 0.0;
        
        double sum = 0.0;
        for (double grade : grades) {
            sum += grade;
        }
        return sum / grades.size();
    }
    
    // Getter methods
    std::string getName() const { return name; }
    int getAge() const { return age; }
    std::string getStudentId() const { return studentId; }
    
    // Method to display student info
    void displayInfo() {
        std::cout << "Name: " << name << std::endl;
        std::cout << "Age: " << age << std::endl;
        std::cout << "Student ID: " << studentId << std::endl;
        std::cout << "Average Grade: " << calculateAverage() << std::endl;
    }
};

int main() {
    // Create student objects
    Student student1("Alice Johnson", 20, "S001");
    Student student2("Bob Smith", 19, "S002");
    
    // Add grades
    student1.addGrade(85.5);
    student1.addGrade(92.0);
    student1.addGrade(78.5);
    
    student2.addGrade(88.0);
    student2.addGrade(91.5);
    student2.addGrade(87.0);
    
    // Display information
    std::cout << "Student Information:" << std::endl;
    std::cout << "===================" << std::endl;
    student1.displayInfo();
    std::cout << std::endl;
    student2.displayInfo();
    
    return 0;
}`;

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
                <div key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between p-3 text-left hover:bg-gray-800 rounded-lg transition-colors ${
                      expandedSections.has(section.id) ? 'bg-gray-800' : ''
                    }`}
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSections.has(section.id) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.has(section.id) && (
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
              <h1 className="text-4xl font-bold mb-6">Object-Oriented Programming in C++</h1>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to organize code. 
                In this comprehensive guide, we'll explore the fundamental concepts of OOP in C++ and learn how to implement 
                them effectively in your programs.
              </p>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-white">Example: Managing Multiple Students data</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Let's start with a practical example. Imagine you're building a system to manage student information. 
                  Instead of using separate variables for each student's data, we can create a Student class that 
                  encapsulates all the relevant information and behaviors.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Here's how we can implement a Student management system using OOP principles:
                </p>

                {/* Code Block */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-8">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <button
                      onClick={() => copyCode(codeExample, 'student-class')}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'student-class' ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300 font-mono leading-relaxed">
                      {codeExample}
                    </code>
                  </pre>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">What is OOP?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Object-Oriented Programming is a programming paradigm based on the concept of "objects", which can contain 
                  data (attributes) and code (methods). OOP is designed to make code more modular, reusable, and easier to 
                  maintain. The main principles of OOP include:
                </p>

                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li><strong>Encapsulation:</strong> Bundling data and methods that work on that data within a single unit</li>
                  <li><strong>Inheritance:</strong> Creating new classes based on existing classes</li>
                  <li><strong>Polymorphism:</strong> Using a single interface to represent different underlying forms</li>
                  <li><strong>Abstraction:</strong> Hiding complex implementation details while showing only essential features</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-white">Objects and Classes</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A <strong>class</strong> is a blueprint or template for creating objects. It defines the structure and 
                  behavior that objects of that class will have. An <strong>object</strong> is an instance of a class - 
                  it's the actual entity created from the class blueprint.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  In our Student example above, <code className="bg-gray-800 px-2 py-1 rounded">Student</code> is the class, 
                  and <code className="bg-gray-800 px-2 py-1 rounded">student1</code> and 
                  <code className="bg-gray-800 px-2 py-1 rounded">student2</code> are objects (instances) of that class.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-white">Attributes and Behaviours</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  <strong>Attributes</strong> (also called member variables or properties) are the data that objects store. 
                  In our Student class, attributes include name, age, studentId, and grades.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  <strong>Behaviors</strong> (also called methods or member functions) are the actions that objects can perform. 
                  In our Student class, behaviors include addGrade(), calculateAverage(), and displayInfo().
                </p>

                <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 p-4 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-2">Key Benefits of OOP:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Code reusability and modularity</li>
                    <li>Easier maintenance and debugging</li>
                    <li>Better organization of complex programs</li>
                    <li>Enhanced security through encapsulation</li>
                    <li>Scalability for large applications</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Object-Oriented Programming is a powerful paradigm that helps organize code in a logical and maintainable way. 
                  By understanding classes, objects, attributes, and behaviors, you can create more robust and scalable C++ 
                  applications. The Student management example demonstrates how OOP principles can be applied to real-world 
                  programming challenges.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <ArrowLeft className="w-4 h-4" />
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

export default DocumentationPage;