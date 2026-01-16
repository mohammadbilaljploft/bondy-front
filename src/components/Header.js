"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
const navLinks = ["Home", "Discover Events", "Courses", "Organizers", "Contact Us"];

export default function BondyHeader() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setShowContent(true), 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="bondy-nav">
        {/* LOGO INTRO ANIMATION */}
        <motion.div
          className="logo-box"
          initial={{ scale: 2.5, x: "45vw", y: "45vh" }}
          animate={!isAnimating ? { scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
        >
          <div className='logo_box'>
             <a href="/" > <img src='/img/logo.svg'/></a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (Shows after animation) */}
      <AnimatePresence>
  {showContent && (
    <div className="nav-content-wrapper" style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
      
      {/* 1. Links ka alag DIV */}
      <motion.div 
        className="menu-links-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
      >
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link}>
              <Link href="" >{link}</Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 2. Right Actions (Signup/Lang) ka alag DIV */}
      <motion.div 
        className="nav-right-actions"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
      >
        <LanguageSelector />
        
        <Link href="/login" className="signup-btn">Signup</Link>
        
        {/* Mobile Hamburger */}
        <button className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </motion.div>

    </div>
  )}
</AnimatePresence>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              className="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo-box">
                  <img src='/img/logo.svg'/>
                </div>
                <button style={{background:'none', border:'none', color:'white'}} onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <ul className="sidebar-links">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>{link}</a>
                  </li>
                ))}
              </ul>

              <div style={{marginTop: 'auto'}}>
                <button className="signup-btn" style={{width: '100%'}}>Signup</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
}