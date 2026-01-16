"use client";
import React from 'react';
import { Apple, Play, Facebook, Linkedin, Instagram, Youtube, Container } from 'lucide-react';

export default function Layout() {
  return (
    <div>


      {/* FOOTER SECTION */}
      <footer className="">
     <div className='container' >
        <div className='footer-container'>
              <div className="footer-left">
          <div className="footer_logo">
           <img src='/img/footer_logo.svg' />
          </div>
         
          <p>Rapidly myocardinate scalable manufactured products rather than cross functional.</p>
          
          <div className="footer-links">
            <div>
              <a href="#">Agenda</a>
              <a href="#">Speakers</a>
              <a href="#">Register</a>
              <a href="#">Venue</a>
              <a href="#">FAQ</a>
            </div>
            <div>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          <div className="copyright">© 2026 Bondy. All rights reserved.</div>
        </div>

        <div className="footer-right">
          <h2>Stay updated</h2>
          <p>Subscribe for event updates & exclusive content.</p>
          <div className="input-box">
            <input type="email" placeholder="Email" />
          </div>
          <button className="stay-btn">Stay updated</button>
          
          <div className="social-links">
             <h4>Follow us</h4>
            <div className='social_icon'> 
              <img src='/img/facebook.svg' />
              <img src='/img/linkdein.svg' />
              <img src='/img/instagram.svg' />
              <img src='/img/youtube.svg' />

            </div>
          </div>
        </div>
        </div>
     </div >

      </footer>
    </div>
  );
}