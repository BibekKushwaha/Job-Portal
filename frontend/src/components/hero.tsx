'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className={`hero-section ${resolvedTheme}`}
      data-theme={resolvedTheme}
    >
      {/* Theme Toggle */}
      {/* Theme is now managed globally by navbar */}

      <div className="hero-container">
        {/* Left Content Section */}
        <div className="hero-content">
          <div className="content-wrapper">
            {/* Badge */}
            <div className="badge animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="badge-icon">🏆</span>
              <span className="badge-text">#1 Job Platform in India</span>
            </div>

            {/* Main Headline */}
            <h3 className="headline animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Start <span className="brand-highlight">Your<span className="portal-accent"> Carrier</span></span>
            </h3>
            {/* Supporting Paragraph */}
            <p className="supporting-text animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Connect with top employers and discover opportunities that match
              your skills. Whether you're a seeker or recruiter, we've got you
              covered with powerful tools and seamless experience.
            </p>

            {/* Stats Row */}
            <div className="stats-row animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="stat-card">
                <div className="stat-value">1k+</div>
                <div className="stat-label">Active Jobs</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">5k+</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10k+</div>
                <div className="stat-label">Job Seekers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button className="btn btn-primary" onClick={() => router.push('/jobs')}>
                <span className="btn-icon">🔍</span>
                Browse Jobs
              </button>
              <button className="btn btn-secondary">
                <span className="btn-icon">ℹ️</span>
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Free to use</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Verified employers</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Secure platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="hero-visual">
          <div className="visual-wrapper animate-float">
            {/* Background Decorative Elements */}
            <div className="visual-bg-elements">
              <div className="bg-circle bg-circle-1"></div>
              <div className="bg-circle bg-circle-2"></div>
              <div className="bg-gradient-orb"></div>
            </div>

            {/* Rocket/Growth Icon */}
            <div className="rocket-icon animate-float" style={{ animationDelay: '0.3s' }}>
              🚀
            </div>

            {/* Dashboard Card */}
            <div className="dashboard-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="card-header">
                <div className="card-avatar"></div>
                <div className="card-info">
                  <div className="card-line card-line-1"></div>
                  <div className="card-line card-line-2"></div>
                </div>
              </div>
              <div className="card-chart">
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
                <div className="chart-bar" style={{ height: '55%' }}></div>
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <div className="chart-bar" style={{ height: '65%' }}></div>
              </div>
            </div>

            {/* Main Characters Illustration */}
            <div className="characters-container">
              <Image
                src="/jobimage.png"
                alt="Job seekers with laptop, clipboard, and resume"
                width={600}
                height={400}
                priority
                className="characters-image pb-2"
              />
            </div>

            {/* Cityscape Background */}
            <div className="cityscape-container">
              <Image
                src="/building.png"
                alt="City skyline"
                width={800}
                height={300}
                className="cityscape-image"
              />
            </div>

            {/* Floating Email Icons */}
            <div className="floating-icon email-icon-1 animate-float" style={{ animationDelay: '0.5s' }}>
              ✉️
            </div>
            <div className="floating-icon email-icon-2 animate-float" style={{ animationDelay: '0.7s' }}>
              ✉️
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Root Variables */
        .hero-section {
          --primary-blue: #3b82f6;
          --secondary-orange: #f97316;
          --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          
          /* Light Theme */
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-gradient: linear-gradient(135deg, #eff6ff 0%, #fef3c7 50%, #fce7f3 100%);
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #64748b;
          --border-color: #e2e8f0;
          --card-bg: rgba(255, 255, 255, 0.9);
          --shadow-color: rgba(0, 0, 0, 0.08);
          --glow-color: rgba(59, 130, 246, 0.15);
          
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-section.dark {
          /* Dark Theme */
          --bg-primary: #0a0a0a;
          --bg-secondary: #111111;
          --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);
          --text-primary: #f8fafc;
          --text-secondary: #cbd5e1;
          --text-muted: #94a3b8;
          --border-color: #1e293b;
          --card-bg: rgba(15, 23, 42, 0.8);
          --shadow-color: rgba(0, 0, 0, 0.5);
          --glow-color: rgba(59, 130, 246, 0.3);
        }

        /* Theme Toggle */
        .theme-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 8px 24px var(--shadow-color);
        }

        /* Main Section */
        .hero-section {
          min-height: 100vh;
          background: var(--bg-gradient);
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, var(--glow-color) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--glow-color) 0%, transparent 50%);
          pointer-events: none;
          opacity: 0.6;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem 4rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Left Content Section */
        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          max-width: 600px;
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: 0 2px 8px var(--shadow-color);
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        .badge-icon {
          font-size: 1rem;
        }

        /* Headline */
        .headline {
          font-size: clamp(1.5rem, 4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .brand-highlight {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .portal-accent {
          color: var(--secondary-orange);
          -webkit-text-fill-color: var(--secondary-orange);
        }

        /* Supporting Text */
        .supporting-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 2.5rem 0;
          max-width: 540px;
        }

        /* Stats Row */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          text-align: center;
          box-shadow: 0 2px 12px var(--shadow-color);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px var(--shadow-color);
          border-color: var(--primary-blue);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* CTA Buttons */
        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-icon {
          font-size: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background: var(--card-bg);
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          box-shadow: 0 2px 8px var(--shadow-color);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: var(--primary-blue);
          box-shadow: 0 4px 16px var(--shadow-color);
        }

        /* Trust Indicators */
        .trust-indicators {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .trust-icon {
          color: #10b981;
          font-weight: bold;
          font-size: 1rem;
        }

        /* Right Visual Section */
        .hero-visual {
          position: relative;
          min-height: 500px;
          margin-top: 9rem;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Background Elements */
        .visual-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: pulse 4s ease-in-out infinite;
        }

        .bg-circle-1 {
          width: 300px;
          height: 300px;
          background: var(--primary-blue);
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .bg-circle-2 {
          width: 200px;
          height: 200px;
          background: var(--secondary-orange);
          bottom: 15%;
          left: 15%;
          animation-delay: 2s;
        }

        .bg-gradient-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rotate 20s linear infinite;
        }

        /* Rocket Icon */
        .rocket-icon {
          position: absolute;
          top: 8%;
          right: 15%;
          font-size: 3rem;
          z-index: 10;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
        }

        /* Dashboard Card */
        .dashboard-card {
          position: absolute;
          top: 15%;
          left: 5%;
          width: 180px;
          padding: 1.25rem;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 8px 32px var(--shadow-color);
          backdrop-filter: blur(10px);
          z-index: 5;
        }

        .card-header {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent-gradient);
        }

        .card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-line {
          height: 8px;
          background: var(--border-color);
          border-radius: 4px;
        }

        .card-line-1 {
          width: 80%;
        }

        .card-line-2 {
          width: 60%;
        }

        .card-chart {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          height: 60px;
        }

        .chart-bar {
          flex: 1;
          background: var(--accent-gradient);
          border-radius: 4px 4px 0 0;
          animation: grow 1.5s ease-out;
        }

        /* Characters Image */
        .characters-container {
          position: relative;
          z-index: 8;
          filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15));
        }

        .characters-image {
          width: 100%;
          height: auto;
          max-width: 500px;
        }

        /* Cityscape */
        .cityscape-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          opacity: 0.3;
          z-index: 1;
        }

        .cityscape-image {
          width: 100%;
          height: auto;
        }

        /* Floating Icons */
        .floating-icon {
          position: absolute;
          font-size: 2rem;
          opacity: 0.7;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
        }

        .email-icon-1 {
          top: 25%;
          left: 10%;
        }

        .email-icon-2 {
          bottom: 30%;
          right: 12%;
        }

        /* Animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes grow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            padding: 2.5rem 3rem 6rem;
          }

          .stats-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .theme-toggle {
            top: 1rem;
            right: 1rem;
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.25rem;
          }

          .hero-container {
            padding: 1rem 1.5rem 3rem;
            gap: 3rem;
          }

          .headline {
            font-size: 2.25rem;
          }

          .supporting-text {
            font-size: 1rem;
          }

          .stats-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .stat-card {
            padding: 1.25rem 1rem;
          }

          .stat-value {
            font-size: 1.75rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .trust-indicators {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-visual {
            order: -1;
            min-height: 400px;
          }

          .dashboard-card {
            width: 140px;
            padding: 1rem;
            top: 10%;
            left: 2%;
          }

          .rocket-icon {
            font-size: 2rem;
            top: 5%;
            right: 10%;
          }

          .characters-image {
            max-width: 350px;
          }

          .email-icon-1,
          .email-icon-2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .headline {
            font-size: 1.875rem;
          }

          .badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }

          .dashboard-card {
            width: 120px;
            padding: 0.75rem;
          }

          .card-avatar {
            width: 28px;
            height: 28px;
          }

          .card-chart {
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
