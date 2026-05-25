import React, { useState, useEffect, useRef } from 'react'
import appRoute from './Routes'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'
import LeadForm from './components/LeadForm'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const autoCloseTimerRef = useRef(null);

  useEffect(() => {
    // Close modal immediately on route change to prevent overlay/visual mismatch
    setShowModal(false);
    
    // Auto-open modal 1.5 seconds after navigating to any page
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle 3-second auto-close when modal opens (unless user interacts)
  useEffect(() => {
    if (showModal) {
      // Start 3-second timer to auto-close if there is no interaction
      autoCloseTimerRef.current = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }

    return () => {
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
    };
  }, [showModal]);

  const cancelAutoClose = () => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {appRoute.map((r, i) => {
          const com = r.element;
          const element = React.isValidElement(com) ? com : React.createElement(com);
          return <Route key={i} path={r.path} element={element} />;
        })}
      </Routes>
      <Footer />

      {/* ========== GLOBAL AUTO-OPEN LEAD POPUP MODAL ========== */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          >
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setShowModal(false)}
            />
            
            {/* Reusable LeadForm Card Wrapper */}
            <motion.div 
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 20, stiffness: 280 }}
              className="relative w-full max-w-xl z-10 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white"
              onMouseEnter={cancelAutoClose}
              onClickCapture={cancelAutoClose}
              onFocusCapture={cancelAutoClose}
              onChangeCapture={cancelAutoClose}
            >
              {/* Close Floating Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors z-20 cursor-pointer shadow-sm"
                aria-label="Close modal"
              >
                <FiX size={16} />
              </button>

              {/* LeadForm Form Component */}
              <LeadForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
