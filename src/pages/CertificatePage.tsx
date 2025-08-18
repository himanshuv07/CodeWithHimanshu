import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Award, Calendar } from 'lucide-react';
import html2canvas from 'html2canvas';

const CertificatePage: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  // Get certificate data from localStorage (would come from quiz results)
  const certificateData = {
    course: 'Complete Web Development',
    score: 95,
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    technologies: ['HTML', 'CSS', 'JavaScript']
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current || !studentName.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        width: 1200,
        height: 800
      });
      
      const link = document.createElement('a');
      link.download = `CodeWithHimanshu-Certificate-${studentName.replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareCertificate = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My CodeWithHimanshu Certificate',
        text: `I just earned a certificate in ${certificateData.course} with a score of ${certificateData.score}%!`,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Certificate URL copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎉 Congratulations!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            You've successfully completed the course with an outstanding score. Generate your certificate below!
          </p>
        </motion.div>

        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto"
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter your full name for the certificate:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </motion.div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div
            ref={certificateRef}
            className="certificate-template mx-auto p-12 rounded-lg shadow-2xl"
            style={{ width: '800px', height: '600px' }}
          >
            <div className="h-full flex flex-col items-center justify-center text-center text-white relative">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Certificate of Completion</h1>
                <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <p className="text-lg mb-4">This is to certify that</p>
                <h2 className="text-3xl font-bold mb-4 min-h-[3rem] flex items-center">
                  {studentName || 'Your Name Here'}
                </h2>
                <p className="text-lg mb-2">has successfully completed the</p>
                <h3 className="text-2xl font-semibold mb-4">{certificateData.course}</h3>
                <p className="text-lg">course with a score of</p>
                <div className="text-4xl font-bold my-4">{certificateData.score}%</div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <p className="text-sm mb-2">Technologies Covered:</p>
                <div className="flex justify-center space-x-4">
                  {certificateData.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end w-full">
                <div className="text-left">
                  <div className="w-32 h-0.5 bg-white mb-2"></div>
                  <p className="text-sm">Himanshu Vishwakarma</p>
                  <p className="text-xs opacity-80">Founder, CodeWithHimanshu</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-8 h-8" />
                  </div>
                  <p className="text-xs">CodeWithHimanshu</p>
                </div>
                
                <div className="text-right">
                  <div className="w-32 h-0.5 bg-white mb-2"></div>
                  <p className="text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificateData.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCertificate}
            disabled={!studentName.trim() || isGenerating}
            className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            <span>{isGenerating ? 'Generating...' : 'Download Certificate'}</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareCertificate}
            className="flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Achievement</span>
          </motion.button>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📋 Certificate Instructions
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Enter your full name exactly as you want it to appear</li>
            <li>• Click "Download Certificate" to save as PNG image</li>
            <li>• Share your achievement on social media or LinkedIn</li>
            <li>• Add it to your portfolio or resume to showcase your skills</li>
            <li>• Keep learning and earn more certificates!</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatePage;