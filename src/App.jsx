import React, { useState, useEffect, useRef, Suspense } from 'react'
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
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();
  const autoCloseTimerRef = useRef(null);
  const reopenTimerRef = useRef(null);

  useEffect(() => {
    // Close modal immediately on route change to prevent overlay/visual mismatch
    setShowModal(false);
    setSelectedService(""); // Reset selected service on route change
    
    // Clear all active timers to reset state completely on navigation
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
    if (reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
      reopenTimerRef.current = null;
    }
    
    // Auto-open modal 1.5 seconds after navigating to any page
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const closeModal = () => {
    setShowModal(false);
    
    // Clear any active 3-second auto-close timer
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
    
    // Schedule auto-reopen after 10 seconds of being closed
    if (reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
    }
    reopenTimerRef.current = setTimeout(() => {
      setShowModal(true);
    }, 10000);
  };

  // Handle 3-second auto-close when modal opens (unless user interacts)
  useEffect(() => {
    if (showModal) {
      // Clear any pending reopen timer since the modal is now open
      if (reopenTimerRef.current) {
        clearTimeout(reopenTimerRef.current);
        reopenTimerRef.current = null;
      }

      // Start 3-second timer to auto-close if there is no interaction
      autoCloseTimerRef.current = setTimeout(() => {
        closeModal();
      }, 3000);
    }

    return () => {
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
        autoCloseTimerRef.current = null;
      }
    };
  }, [showModal]);

  const cancelAutoClose = () => {
    // Cancel the auto-close timer
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
    // Also cancel any pending reopen timer so it doesn't trigger unexpectedly
    if (reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
      reopenTimerRef.current = null;
    }
  };

  // Handle custom trigger to open modal programmatically from other pages or buttons
  useEffect(() => {
    const handleOpenModal = (e) => {
      cancelAutoClose(); // Cancel any active timers
      
      // Extract service from event detail (if any)
      const service = e.detail?.service || "";
      setSelectedService(service);
      
      setShowModal(true); // Open the modal
    };

    window.addEventListener("open-lead-modal", handleOpenModal);
    return () => {
      window.removeEventListener("open-lead-modal", handleOpenModal);
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md">
          <div className="relative flex items-center justify-center">
            {/* Elegant glowing backdrop */}
            <div className="absolute w-24 h-24 bg-[#d7193f]/5 rounded-full blur-xl animate-pulse"></div>
            
            {/* Dashed orbital track */}
            <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-[#d7193f]/20 animate-spin [animation-duration:8s]"></div>
            
            {/* Spinning Brand Red border */}
            <div className="absolute w-24 h-24 rounded-full border-2 border-t-[#d7193f] border-r-transparent border-b-[#d7193f]/40 border-l-transparent animate-spin"></div>
            
            {/* Pulsing centered Brand Logo Icon */}
            <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md p-2">
              <img src="/logoIcon.webp" alt="EzzyBiz Loading" className="w-10 h-10 object-contain animate-pulse" />
            </div>
          </div>
          
          {/* Brand loading text & bouncing dots */}
          <div className="mt-8 flex flex-col items-center">
            <h3 className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gray-800">
              EZZY<span className="text-[#d7193f]">.BiZ</span>
            </h3>
            <div className="mt-3 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-bounce [animation-delay:0ms]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-bounce [animation-delay:150ms]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-bounce [animation-delay:300ms]"></span>
            </div>
          </div>
        </div>
      }>
        <Routes>
          {appRoute.map((r, i) => {
            const com = r.element;
            const element = React.isValidElement(com) ? com : React.createElement(com);
            return <Route key={i} path={r.path} element={element} />;
          })}
        </Routes>
      </Suspense>
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
              onClick={closeModal}
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
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors z-20 cursor-pointer shadow-sm"
                aria-label="Close modal"
              >
                <FiX size={16} />
              </button>

              {/* LeadForm Form Component */}
              <LeadForm initialService={selectedService} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
