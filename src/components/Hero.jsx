import React from 'react';
import { ArrowRight, Download, Brain } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Brain size={16} className="badge-icon" />
            <span>AI/ML Enthusiast</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Om Bhavsar</span>
            <br />
            Engineering the Future.
          </h1>

          <p className="hero-subtitle">
            FINAL-YEAR ENGINEERING STUDENT AT VIT PUNE.<br />
            Upcoming Technology Developer at Barclays.<br />
            Passionate about Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and core computer science fundamentals.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="profile-image-container">
            <img src={profileImg} alt="Om Bhavsar" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
