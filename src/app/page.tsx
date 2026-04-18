"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, Image as ImageIcon, FileText, Workflow, Database, Cpu, MessageSquare, Network, Share2, Zap } from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 100, 
        display: 'flex', 
        justifyContent: 'center',  
        width: '100%', 
        padding: isScrolled ? '0px' : '24px 0', 
        transition: 'padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderRadius: isScrolled ? '0px' : '16px',
          boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.05)' : '0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.04)',
          padding: isScrolled ? '16px 48px' : '6px 6px 6px 12px',
          width: isScrolled ? '100%' : 'auto',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          gap: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="logo-icon" style={{ width: '36px', height: '36px', fontSize: '20px', background: 'var(--text-primary)', color: 'var(--bg-main)' }}>S</div>
              <span className="brand-name" style={{ fontSize: '22px', fontWeight: 600 }}>sachcheck.in</span>
            </div>

            {/* Separator line */}
            <div style={{ width: '1px', height: '20px', background: '#e5e7eb' }}></div>

            {/* Nav Links */}
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', fontSize: '15px', color: '#1e1b4b', fontWeight: 500 }}>
              <Link href="#features" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.9'}>Features</Link>
              <Link href="#accuracy" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.9'}>Accuracy</Link>
            </div>
          </div>

          {/* Right Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginLeft: '16px' }}>
            <Link href="/login" style={{ fontSize: '15px', color: '#1e1b4b', fontWeight: 500, opacity: 0.9, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.9'}>Log in</Link>
            <Link href="/login" style={{
              padding: '10px 20px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#1e1b4b',
              background: '#ffffff',
              border: '1px solid #e9d8fd',
              borderRadius: '12px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              transition: 'all 0.2s'
            }} onMouseOver={e => { e.currentTarget.style.borderColor = '#d8b4fe'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)' }} onMouseOut={e => { e.currentTarget.style.borderColor = '#e9d8fd'; e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.03)' }}>Access Platform</Link>
          </div>
        </nav>
      </div>

      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
        {/* Navigation Spacer to prevent layout shift */}
        <div style={{ height: '90px', width: '100%', flexShrink: 0 }}></div>
      
        {/* Hero Section */}
      <main style={{ flex: 1 }}>
        <section style={{ padding: '120px 24px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--bg-hover)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '24px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div className="pulsing-dot" style={{ background: 'var(--accent-blue)' }}></div> Multi-Modal AI Detection
            </div>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--bg-hover)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '24px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-red)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div className="pulsing-dot" style={{ background: 'var(--accent-red)' }}></div> Temporal Drift
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--bg-hover)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '24px', fontSize: '12px', fontWeight: 600, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div className="pulsing-dot" style={{ background: '#8b5cf6' }}></div> AI Orchestrator
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--bg-hover)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '24px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div className="pulsing-dot" style={{ background: 'var(--accent-green)' }}></div> Graph RAG
            </div>
          </div>

          <h1 style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.03em', fontFamily: 'var(--font-outfit)' }}>
            The Global Defense Against <br /><span style={{ color: 'var(--text-secondary)' }}>Synthesized Misinformation.</span>
          </h1>

          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '48px', maxWidth: '640px' }}>
            sachcheck.in intercepts and neutralizes deepfakes, manipulated audio, and hostile text narratives in real-time. Secure your information integrity today.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/login" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Launch Command Center <ArrowRight size={18} />
            </Link>
            <Link href="#demo" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '15px', background: 'var(--bg-panel)' }}>
              View Live Demo
            </Link>
          </div>
        </section>

        {/* Social Proof / Trust Section */}
        <section style={{ padding: '20px 24px 80px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          <div style={{ marginBottom: '24px', fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Built with 🖤 at
          </div>

          {/* Row 1: Partner Logos Marquee */}
          <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '75%', margin: '0 auto 40px', position: 'relative', padding: '10px 0' }}>
             
             {/* Fade Gradients for smooth edges */}
             <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 2 }}></div>
             <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 2 }}></div>

             <style dangerouslySetInnerHTML={{__html: `
               @keyframes marqueeScrollLTR {
                 0% { transform: translateX(-50%); }
                 100% { transform: translateX(0%); }
               }
               .marquee-content {
                 display: flex;
                 width: max-content;
                 animation: marqueeScrollLTR 20s linear infinite;
               }
               .marquee-content:hover {
                 animation-play-state: paused;
               }
             `}} />

             <div className="marquee-content">
               {/* First Half */}
               <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                   <img src="/user_new_srm_logo.png" alt="SRM" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(70%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
                   <img src="/user_new_code_wizards_logo.png" alt="Code Wizards" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(100%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                   <img src="/user_new_srm_logo.png" alt="SRM" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(70%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
                   <img src="/user_new_code_wizards_logo.png" alt="Code Wizards" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(100%)', transition: 'all 0.3s ease' }} />
                 </div>
               </div>

               {/* Second Half (Exact Duplicate for perfect looping) */}
               <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                   <img src="/user_new_srm_logo.png" alt="SRM" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(70%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
                   <img src="/user_new_code_wizards_logo.png" alt="Code Wizards" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(100%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                   <img src="/user_new_srm_logo.png" alt="SRM" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(70%)', transition: 'all 0.3s ease' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', height: '64px' }}>
                   <img src="/user_new_code_wizards_logo.png" alt="Code Wizards" style={{ height: '100%', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'grayscale(100%) opacity(100%)', transition: 'all 0.3s ease' }} />
                 </div>
               </div>
             </div>

          </div>

          {/* Dotted separator line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '40px auto 32px', maxWidth: '300px' }}>
            <div style={{ flex: 1, height: '1px', background: '#f3f4f6' }}></div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#e5e7eb' }}></div>
            <div style={{ flex: 1, height: '1px', background: '#f3f4f6' }}></div>
          </div>

          {/* Row 2: Ingestion Channels */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '32px', padding: '0 16px' }}>

            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ecfdf5', padding: '2px 10px', borderRadius: '12px', width: 'fit-content', marginBottom: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)' }}></div>
                  <span style={{ fontWeight: 600, color: '#065f46', fontSize: '13px' }}>WhatsApp</span>
                </div>
                <div style={{ color: '#6b7280', fontSize: '13px', fontWeight: 500 }}>Forwarding Quick Service</div>
              </div>
            </div>

            {/* Separator */}
            <div style={{ width: '1px', height: '36px', background: '#f3f4f6' }}></div>

            {/* Telegram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#229ED9">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.198-.054-.31-.346-.111l-6.4 4.024-2.76-.86c-.6-.18-.613-.6.126-.89l10.81-4.17c.502-.18.94.137.818.91z" />
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#eff6ff', padding: '2px 8px', borderRadius: '12px', width: 'fit-content', marginBottom: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)' }}></div>
                  <span style={{ fontWeight: 600, color: '#1e3a8a', fontSize: '13px' }}>Telegram Bot</span>
                  <span style={{ background: '#3b82f6', color: '#ffffff', fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '8px', marginLeft: '4px', letterSpacing: '0.5px' }}>ACTIVE FEATURE</span>
                </div>
                <div style={{ color: '#6b7280', fontSize: '13px', fontWeight: 500 }}>Instant Misinformation Checks</div>
              </div>
            </div>

            {/* Separator */}
            <div style={{ width: '1px', height: '36px', background: '#f3f4f6' }}></div>

            {/* Chrome Extension */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22 12A10 10 0 0 0 12 2V12h10z" />
                  <path fill="#0F9D58" d="M12 22A10 10 0 0 0 22 12H12v10z" />
                  <path fill="#F4B400" d="M2 12A10 10 0 0 0 12 22V12H2z" />
                  <path fill="#DB4437" d="M12 2A10 10 0 0 0 2 12h10V2z" />
                  <circle cx="12" cy="12" r="5" fill="#f3f4f6" />
                  <circle cx="12" cy="12" r="2.5" fill="#4285F4" />
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fefce8', padding: '2px 10px', borderRadius: '12px', width: 'fit-content', marginBottom: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308', boxShadow: '0 0 0 2px rgba(234, 179, 8, 0.2)' }}></div>
                  <span style={{ fontWeight: 600, color: '#854d0e', fontSize: '13px' }}>Chrome Extension</span>
                </div>
                <div style={{ color: '#6b7280', fontSize: '13px', fontWeight: 500 }}>In-Browser Detection</div>
              </div>
            </div>

          </div>
        </section>

        {/* Languages Expansion Section */}
        <section id="languages" style={{ padding: '80px 24px 60px', textAlign: 'center', background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '16px', color: 'var(--text-primary)', fontFamily: 'var(--font-outfit)' }}>
              Compatible with 11 Indian languages
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '64px', color: 'var(--text-secondary)' }}>
              <span style={{ fontSize: '16px' }}>Seamless content analysis across regional dialects, </span>
              <span style={{ background: '#f5f3ff', color: '#6d28d9', padding: '4px 10px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.2)' }}></div>
                powered by Sarvam AI
              </span>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', padding: '10px 0' }}>
              {/* Fade masks */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px', background: 'linear-gradient(to right, #ffffff 20%, transparent)', zIndex: 2 }}></div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px', background: 'linear-gradient(to left, #ffffff 20%, transparent)', zIndex: 2 }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  .lang-card {
                    width: 160px;
                    height: 68px;
                    border-radius: 12px;
                    border: 1px solid #f3f4f6;
                    background: #ffffff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                    transition: all 0.2s ease;
                    cursor: pointer;
                  }
                  .lang-card:hover {
                    border: 1px solid #bfdbfe;
                    background: #eff6ff;
                    box-shadow: 0 2px 10px rgba(59, 130, 246, 0.1);
                  }
                  .lang-card-title {
                    font-size: 18px;
                    font-weight: 500;
                    color: var(--text-primary);
                    margin-bottom: 4px;
                    transition: all 0.2s ease;
                  }
                  .lang-card:hover .lang-card-title {
                    color: #1e3a8a;
                  }
                  .lang-card-subtitle {
                    font-size: 11px;
                    color: #9ca3af;
                    transition: all 0.2s ease;
                  }
                  .lang-card:hover .lang-card-subtitle {
                    color: #3b82f6;
                  }
                  .ghost-card {
                    width: 160px;
                    height: 68px;
                    border-radius: 12px;
                    border: 1px solid #f3f4f6;
                    background: #ffffff;
                  }
                `}} />
                
                {/* Row 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', transform: 'translateX(-40px)', width: 'max-content' }}>
                  <div className="ghost-card" style={{ opacity: 0.3 }}></div>
                  <div className="ghost-card" style={{ opacity: 0.6 }}></div>
                  
                  <div className="lang-card">
                    <span className="lang-card-title">हिन्दी</span>
                    <span className="lang-card-subtitle">Hindi · hi-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">தமிழ்</span>
                    <span className="lang-card-subtitle">Tamil · ta-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">বাংলা</span>
                    <span className="lang-card-subtitle">Bengali · bn-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">తెలుగు</span>
                    <span className="lang-card-subtitle">Telugu · te-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">ಕನ್ನಡ</span>
                    <span className="lang-card-subtitle">Kannada · kn-IN</span>
                  </div>

                  <div className="ghost-card" style={{ opacity: 0.6 }}></div>
                  <div className="ghost-card" style={{ opacity: 0.3 }}></div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', transform: 'translateX(40px)', width: 'max-content' }}>
                  <div className="ghost-card" style={{ opacity: 0.3 }}></div>
                  <div className="ghost-card" style={{ opacity: 0.6 }}></div>
                  
                  <div className="lang-card">
                    <span className="lang-card-title">മലയാളം</span>
                    <span className="lang-card-subtitle">Malayalam · ml-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">मराठी</span>
                    <span className="lang-card-subtitle">Marathi · mr-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">ગુજરાતી</span>
                    <span className="lang-card-subtitle">Gujarati · gu-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">ਪੰਜਾਬੀ</span>
                    <span className="lang-card-subtitle">Punjabi · pa-IN</span>
                  </div>
                  <div className="lang-card">
                    <span className="lang-card-title">ଓଡ଼ିଆ</span>
                    <span className="lang-card-subtitle">Odia · or-IN</span>
                  </div>

                  <div className="ghost-card" style={{ opacity: 0.6 }}></div>
                  <div className="ghost-card" style={{ opacity: 0.3 }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grids */}
        <section id="features" style={{ padding: '100px 48px', background: 'var(--bg-panel)', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 600, marginBottom: '16px', fontFamily: 'var(--font-outfit)' }}>Forensic Infrastructure</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>Powered by proprietary heuristics scanning across three primary threat vectors.</p>
            </div>

            <div className="grid-3" style={{ gap: '32px' }}>
              <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--accent-blue)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <ImageIcon size={24} color="var(--accent-blue)" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>StyleGAN Detection</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '14px' }}>Identify generative anomalies, pixel-level manipulation, and conflicting metadata footprints inside synthetic imagery instantly.</p>
              </div>

              <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--accent-red)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Activity size={24} color="var(--accent-red)" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Audio Clone Extraction</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '14px' }}>Analyze vocal tract acoustic characteristics to detect manipulated waveforms and synthetic voice cloning in live audio streams.</p>
              </div>

              <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--accent-green)' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <FileText size={24} color="var(--accent-green)" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Linguistic Bias Mapping</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '14px' }}>Detect high-fear appeals and manipulative semantic structures in text via automated cross-referencing with trusted institutional endpoints.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Architecture Section */}
      <section id="architecture" style={{ padding: '100px 48px', background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '24px', fontSize: '12px', fontWeight: 600, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '24px' }}>
              <Workflow size={14} /> Neural Processing Pipeline
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px', fontFamily: 'var(--font-outfit)', letterSpacing: '-0.02em' }}>
              Enterprise-Grade <span style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}>Architecture</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              A multi-layered, graph-augmented retrieval system designed to ingest, analyze, and neutralize misinformation at global scale.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Layer 1 & Orchestrator */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
              <div className="arch-card" style={{ padding: '40px', background: 'var(--bg-panel)', borderRadius: '24px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                    <Network size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em' }}>Layer 1: Ingestion</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Omnichannel Data Capture</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['WhatsApp Bot', 'Telegram', 'Browser Ext', 'REST API', 'URL Crawler', 'Language Detect', 'Bhashini ASR', 'Modality Tagging'].map(tag => (
                    <span key={tag} style={{ padding: '6px 12px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="arch-card" style={{ padding: '40px', background: 'var(--bg-panel)', borderRadius: '24px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em' }}>Orchestrator Agent</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>ReAct Loop Processing</p>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Decomposes tasks into granular units',
                    'Dynamically assigns specialized sub-agents',
                    'Merges multi-modal results contextually'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <Zap size={16} color="#8b5cf6" style={{ marginTop: '4px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-agents Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { icon: FileText, title: 'Text Agent', color: '#10b981', items: ['MuRIL Classify', 'NER Extraction', 'AI-Text Detect'] },
                { icon: ImageIcon, title: 'Image Agent', color: '#f59e0b', items: ['Deepfake Detect', 'EXIF Analysis', 'Reverse Search'] },
                { icon: Activity, title: 'Audio Agent', color: '#ef4444', items: ['Voice Clone Detect', 'Splice Detect', 'Audio Diarize'] },
                { icon: Workflow, title: 'Video Agent', color: '#ec4899', items: ['Frame Extraction', 'Audio-Visual Sync', 'Multi-modal Fusion'] }
              ].map((agent, idx) => (
                <div key={idx} className="agent-card hover-lift" style={{ padding: '24px', background: 'var(--bg-panel)', borderRadius: '20px', border: `1px solid var(--border-color)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <agent.icon size={20} color={agent.color} />
                    <h4 style={{ fontWeight: 600, fontSize: '16px' }}>{agent.title}</h4>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {agent.items.map((item, i) => (
                      <div key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '8px 12px', background: 'var(--bg-main)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* GraphRAG Core */}
            <div className="arch-card" style={{ padding: '48px', background: 'linear-gradient(145deg, var(--bg-panel) 0%, rgba(16, 185, 129, 0.05) 100%)', borderRadius: '24px', border: '1px solid var(--border-color)', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                      <Database size={28} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.01em' }}>Layer 4: GraphRAG Core</h3>
                      <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Knowledge Graph & Vector DB Nexus</p>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    The cognitive engine anchoring our detection. Fuses semantic search with temporal knowledge graphs to evaluate claims against a continuously updating reality matrix.
                  </p>
                </div>
                <div style={{ flex: '2 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  {[
                    'Cognee', 'Vector DB (Qdrant)', 'Semantic Claim Search', 'Embedding Write-Back',
                    'Claim • Source • Person Nodes', 'Event • Verdict Nodes', 'Source Credibility',
                    'Domain Trust Scores', 'Temporal Edge Updates'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', background: 'var(--bg-main)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final layers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '32px', background: 'var(--bg-panel)', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <ShieldCheck color="#ef4444" size={28} style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Fact-Check & Scoring</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Risk Score (0-100) & Labeling</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Inconsistency Span Highlighting</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Trusted Source Citations</div>
                </div>
              </div>

              <div style={{ padding: '32px', background: 'var(--bg-panel)', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <MessageSquare color="#3b82f6" size={28} style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Counter-Narrative Agent</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Multilingual (Hindi, Tamil, English)</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Short Formats (WhatsApp/Social)</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Long Formats (Moderator Reports)</div>
                </div>
              </div>

              <div style={{ padding: '32px', background: 'var(--bg-panel)', borderRadius: '20px', border: '1px solid var(--border-color)', borderTop: '4px solid #f59e0b' }}>
                <Share2 color="#f59e0b" size={28} style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Layer 6: Output Delivery</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Moderator Dashboard API</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Push to WhatsApp / Telegram</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Automated PDF/CSV Exports</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• Platform Webhook Integrations</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '64px 48px', background: '#ffffff', fontFamily: 'var(--font-inter)' }}>
        {/* Top Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="logo-icon" style={{ width: '28px', height: '28px', fontSize: '16px', background: 'var(--text-primary)', color: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontWeight: 'bold' }}>S</div>
              <span className="brand-name" style={{ fontSize: '18px', fontWeight: 600 }}>sachcheck.in</span>
            </div>

            <div style={{ width: '1px', height: '20px', background: '#e5e7eb' }}></div>

            <span style={{ fontSize: '14px', color: '#6b7280' }}>The global defense against misinformation © 2026 sachcheck.in</span>
          </div>

          <div style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500 }}>
            sachcheck.in is a multi-modal misinformation detection platform.
          </div>
        </div>

        {/* Separator Graphic */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '64px 0' }}>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.05))' }}></div>
          <div style={{ padding: '0 24px', color: '#d1d5db', display: 'flex', gap: '16px', fontSize: '15px', fontWeight: 300 }}>
            <span>)</span><span>+</span><span>(</span>
          </div>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.05))' }}></div>
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between' }}>
          {/* Left Area (Email + Social) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
            <Link href="mailto:hello@sachcheck.in" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              border: '1px solid #e5e7eb', borderRadius: '24px',
              padding: '8px 16px', fontSize: '14px', color: '#374151',
              fontWeight: 500, width: 'fit-content', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              hello@sachcheck.in
              <span style={{ color: '#9ca3af', marginLeft: '4px' }}>›</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link href="#" style={{ color: '#0077B5' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></Link>
              <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }}></div>
              <Link href="#" style={{ color: '#FF0000' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></Link>
              <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }}></div>
              <Link href="#" style={{ color: '#E1306C' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <div style={{ width: '1px', height: '16px', background: '#e5e7eb' }}></div>
              <Link href="#" style={{ color: '#0F1419' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></Link>
            </div>
          </div>

          {/* Right Area (Links Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px', flex: 1, maxWidth: '800px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>Solutions</h4>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>sachcheck Prospect</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>sachcheck Monitor</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>sachcheck Enterprise</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>AI Research</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>API</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Integrations</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Pricing</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Get a demo</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>Resources</h4>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Customers</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Blog</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Knowledge base</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Support</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Trust center</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Status</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Free text scanner</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Free audio verifier</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Company directory</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>Company</h4>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Feature requests</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Changelog</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Become an affiliate</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Terms of service</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Privacy policy</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Vulnerability disclosure</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Opt out</Link>
              <Link href="#" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.2s', lineHeight: 1.5 }} onMouseOver={e => e.currentTarget.style.color = '#111827'} onMouseOut={e => e.currentTarget.style.color = '#6b7280'}>Do not sell or share my<br />personal information</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
