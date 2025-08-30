import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, RefreshCcw, Home, CheckCircle, XCircle, BookOpen } from 'lucide-react';

interface QuizResults {
  category: string;
  score: number;
  total: number;
  percentage: number;
  answers: number[];
  questions: Array<{
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }>;
}

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 80) return "Excellent work! 🎉";
    if (percentage >= 70) return "Good job! 👏";
    if (percentage >= 60) return "Not bad! 👍";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 dark:text-green-400";
    if (percentage >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Trophy className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {results.category} Quiz Results
          </h1>
          
          <p className={`text-2xl font-semibold mb-6 ${getPerformanceColor(results.percentage)}`}>
            {getPerformanceMessage(results.percentage)}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {results.score}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Correct Answers
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {results.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Questions
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className={`text-3xl font-bold ${getPerformanceColor(results.percentage)}`}>
                {results.percentage}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Score
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCcw className="w-5 h-5" />
              <span>Retake Quiz</span>
            </button>

            <Link
              to={`/notes/${results.category.toLowerCase()}`}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Study Notes</span>
            </Link>
            
            {results.percentage >= 90 && (
              <Link
                to="/certificate"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Trophy className="w-5 h-5" />
                <span>Get Certificate</span>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Detailed Review */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Question Review
          </h2>

          {results.questions.map((question, index) => {
            const userAnswer = results.answers[index];
            const isCorrect = userAnswer === question.answerIndex;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCorrect 
                      ? 'bg-green-100 dark:bg-green-900' 
                      : 'bg-red-100 dark:bg-red-900'
                  }`}>
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {index + 1}. {question.question}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optionIndex) => {
                        let optionClass = "p-3 rounded-lg border ";
                        
                        if (optionIndex === question.answerIndex) {
                          optionClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                        } else if (optionIndex === userAnswer && !isCorrect) {
                          optionClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                        } else {
                          optionClass += "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700";
                        }
                        
                        return (
                          <div key={optionIndex} className={optionClass}>
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-sm">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              <span>{option}</span>
                              {optionIndex === question.answerIndex && (
                                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                                  ✓ Correct
                                </span>
                              )}
                              {optionIndex === userAnswer && !isCorrect && (
                                <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                                  ✗ Your answer
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;