import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import NotesPage from './pages/NotesPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';
import CoursesPage from './pages/CoursesPage';
import CertificatePage from './pages/CertificatePage';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <motion.div
                      key="landing"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <LandingPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/quiz/:category" 
                  element={
                    <motion.div
                      key="quiz"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <QuizPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/results" 
                  element={
                    <motion.div
                      key="results"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ResultsPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/notes/:category?" 
                  element={
                    <motion.div
                      key="notes"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <NotesPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <motion.div
                      key="profile"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ProfilePage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <motion.div
                      key="contact"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <ContactPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/community" 
                  element={
                    <motion.div
                      key="community"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <CommunityPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/courses" 
                  element={
                    <motion.div
                      key="courses"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <CoursesPage />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/certificate" 
                  element={
                    <motion.div
                      key="certificate"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <CertificatePage />
                    </motion.div>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;