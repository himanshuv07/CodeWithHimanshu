import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Award, Calendar, Trophy, Star } from 'lucide-react';
import html2canvas from 'html2canvas';

const CertificatePage: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [certificateData, setCertificateData] = useState<any>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get certificate data from localStorage (from quiz results)
    const savedResults = localStorage.getItem('quizResults');
    if (savedResults) {
      const results = JSON.parse(savedResults);
      if (results.percentage >= 90) {
        setCertificateData({
          course: `${results.category} Mastery`,
          score: results.percentage,
          date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          category: results.category,
          totalQuestions: results.total,
          correctAnswers: results.score
        });
      }
    } else {
      // Default certificate data for demo
      setCertificateData({
        course: 'Web Development Mastery',
        score: 95,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        category: 'Web Development',
        totalQuestions: 50,
        correctAnswers: 48
      });
    }
  }, []);

  const downloadCertificate = async () => {
    if (!certificateRef.current || !studentName.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        width: 1200,
        height: 800,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = `CodeWithHimanshu-Certificate-${studentName.replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Error generating certificate. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareCertificate = () => {
    const shareText = `🎉 I just earned a certificate in ${certificateData?.course} with a score of ${certificateData?.score}% on CodeWithHimanshu! 🚀`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My CodeWithHimanshu Certificate',
        text: shareText,
        url: window.location.href
      });
    } else {
      // Fallback to copying text
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      alert('Certificate details copied to clipboard!');
    }
  };

  if (!certificateData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-400 mb-2">No Certificate Available</h1>
          <p className="text-gray-500 mb-6">Complete a quiz with 90%+ score to earn your certificate</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Take a Quiz
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            🎉 <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Congratulations!
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            You've successfully completed the <span className="text-blue-400 font-semibold">{certificateData.course}</span> course with an outstanding score of <span className="text-green-400 font-bold">{certificateData.score}%</span>!
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          {[
            { icon: Trophy, label: 'Score Achieved', value: `${certificateData.score}%`, color: 'from-yellow-400 to-orange-500' },
            { icon: Target, label: 'Questions Correct', value: `${certificateData.correctAnswers}/${certificateData.totalQuestions}`, color: 'from-green-400 to-emerald-500' },
            { icon: Star, label: 'Performance', value: 'Excellent', color: 'from-blue-400 to-purple-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900 rounded-2xl border border-gray-800 p-6 mb-8 max-w-md mx-auto"
        >
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Enter your full name for the certificate:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Your Full Name"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600"
          />
        </motion.div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div
              ref={certificateRef}
              className="relative bg-white p-12 rounded-lg shadow-2xl overflow-hidden"
              style={{ width: '800px', height: '600px' }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }} />
              </div>

              {/* Certificate Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center text-gray-900">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      CodeWithHimanshu
                    </h1>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Certificate of Achievement</h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="mb-8">
                  <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center justify-center border-b-2 border-gray-300 pb-2">
                    {studentName || 'Your Name Here'}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">has successfully completed the</p>
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">{certificateData.course}</h4>
                  <p className="text-lg text-gray-600">with an outstanding score of</p>
                  <div className="text-5xl font-bold text-green-600 my-4">{certificateData.score}%</div>
                  <p className="text-sm text-gray-500">
                    Answered {certificateData.correctAnswers} out of {certificateData.totalQuestions} questions correctly
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end w-full">
                  <div className="text-left">
                    <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm font-semibold text-gray-700">Himanshu Vishwakarma</p>
                    <p className="text-xs text-gray-500">Founder & Lead Instructor</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-2">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Verified Certificate</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm font-semibold text-gray-700 flex items-center justify-end">
                      <Calendar className="w-4 h-4 mr-1" />
                      {certificateData.date}
                    </p>
                    <p className="text-xs text-gray-500">Date of Completion</p>
                  </div>
                </div>

                {/* Certificate ID */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <p className="text-xs text-gray-400">
                    Certificate ID: CWH-{certificateData.category.toUpperCase()}-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-blue-600 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-purple-600 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-purple-600 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-blue-600 rounded-br-lg"></div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCertificate}
            disabled={!studentName.trim() || isGenerating}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-2">
              {isGenerating ? (
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <Download className="w-5 h-5" />
              )}
              <span>{isGenerating ? 'Generating Certificate...' : 'Download Certificate'}</span>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={shareCertificate}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>Share Achievement</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800/30 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Certificate Instructions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Enter your full name exactly as you want it to appear</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Click "Download Certificate" to save as high-quality PNG</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Share your achievement on social media platforms</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full" />
                <span>Add it to your LinkedIn profile and resume</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Use it to showcase your skills to employers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Keep learning and earn more certificates!</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">What's Next?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/courses'}
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300"
            >
              Explore More Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/community'}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Share in Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatePage;