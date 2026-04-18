"use client";
import React, { useState } from 'react';
import { Globe, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: 'var(--bg-main)' }}>
      
      {/* Left Panel: Auth Form */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '40px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '18px' }}>S</div>
          <span className="brand-name" style={{ fontSize: '20px' }}>sachcheck.in</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '420px', margin: '0 auto', width: '100%' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', color: 'var(--text-primary)', marginBottom: '12px' }}>Secure System Access</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Enter your credentials to access the global misinformation intelligence grid.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <a href="http://localhost:5000/api/auth/google" className="btn btn-outline" style={{ width: '100%', padding: '12px', justifyContent: 'center', fontSize: '13px', gap: '12px', textDecoration: 'none', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </a>
            <a href="http://localhost:5000/api/auth/github" className="btn btn-outline" style={{ width: '100%', padding: '12px', justifyContent: 'center', fontSize: '13px', gap: '12px', textDecoration: 'none', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              Continue with GitHub
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Or enterprise login</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px' }}>Operative ID / Email</label>
              <input type="email" defaultValue="admin@sachcheck.in" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-primary)', outline: 'none', fontSize: '14px' }} />
            </div>
            <div>
              <div className="flex-between" style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>Clearance Key</label>
                <a href="#" style={{ fontSize: '12px', color: 'var(--accent-blue)' }}>Reset Access</a>
              </div>
              <input type="password" defaultValue="••••••••" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-primary)', outline: 'none', fontSize: '14px', letterSpacing: '2px' }} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', justifyContent: 'center', marginTop: '12px', fontSize: '14px', transition: 'all 0.2s' }}>
              {isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="pulsing-dot" style={{ background: 'var(--bg-main)' }}></div>
                  Authenticating...
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Login <ArrowRight size={16} />
                </div>
              )}
            </button>

            <button type="button" onClick={() => { setIsLoading(true); setTimeout(() => router.push('/dashboard'), 600); }} className="btn btn-outline" style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '14px', transition: 'all 0.2s', borderStyle: 'dashed' }}>
              Access as Guest (Full Features)
            </button>
          </form>

          <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            Node deployment pending? <a href="#" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Request Access Terminal</a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: 'var(--text-muted)' }}>
          <span>© 2026 sachcheck.in</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>

      {/* Right Panel: Stunning Globe Viz */}
      <div style={{ flex: '1.2', background: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
        
        {/* Animated Globe Container */}
        <div style={{ position: 'absolute', opacity: 0.15 }}>
          <Globe size={1200} strokeWidth={0.5} color="#fff" style={{ animation: 'spin 60s linear infinite' }} />
        </div>
        
        {/* Gradient Overlay for Sleek Look */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, transparent 30%, #050505 80%)' }}></div>
        
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(0,0,0,0) 100%)' }}></div>

        {/* Floating Value Props inside Globe Panel */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '400px', color: '#fff' }}>
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px', transform: 'translateX(-40px)' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '6px', borderRadius: '6px' }}><Zap size={16} color="#fff" /></div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, fontFamily: 'var(--font-outfit)', letterSpacing: '0.5px' }}>Real-time Interception</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Monitoring billions of global data points milliseconds after ingestion using highly parallelized heuristic AI engines.</p>
          </div>

          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', transform: 'translateX(40px)' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '6px', borderRadius: '6px' }}><ShieldCheck size={16} color="#fff" /></div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, fontFamily: 'var(--font-outfit)', letterSpacing: '0.5px' }}>Forensic Neutralization</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Deep structural analysis mapping synthetic fingerprints across audio, text, and visual manipulation vectors.</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
