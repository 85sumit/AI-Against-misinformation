"use client";
import React from 'react';
import { Download, CheckCircle, AlertTriangle, Activity, Zap, BarChart2, ShieldCheck, Newspaper } from 'lucide-react';

export default function TextAnalysisPage() {
  return (
    <div className="animate-slide-up">
      {/* Top Header Section */}
      <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-outfit)', margin: 0 }}>Text Analysis</h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Probability</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '16px' }}>92%</span>
              </div>
              <div style={{ width: '1px', height: '30px', background: 'var(--border-color)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Truth Score</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '16px' }}>84%</span>
              </div>
            </div>
            <button className="btn btn-primary">
              <Download size={16} /> Export Intel
            </button>
          </div>
        </div>
        <textarea
          rows={3}
          placeholder="Paste any article, claim, or text snippet here to analyze for misinformation..."
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '14px',
            fontFamily: 'var(--font-inter)',
            color: 'var(--text-primary)',
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            resize: 'vertical',
            outline: 'none',
            lineHeight: 1.6,
            transition: 'border-color 0.2s ease',
            boxSizing: 'border-box',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
        />
      </div>

      {/* 3-Column Tactical Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '24px' }}>
        
        {/* Left Column: Context & Sources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card">
            <div className="card-title" style={{ marginBottom: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <ShieldCheck size={14} /> Verification Pipeline
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li className="flex-between">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-secondary)' }}><CheckCircle size={14} /> Academic DB</div>
                <span style={{ color: 'var(--text-primary)', fontSize: '11px', fontWeight: 'bold' }}>VERIFIED</span>
              </li>
              <li className="flex-between">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-secondary)' }}><CheckCircle size={14} /> Gov Archives</div>
                <span style={{ color: 'var(--text-primary)', fontSize: '11px', fontWeight: 'bold' }}>VERIFIED</span>
              </li>
              <li className="flex-between" style={{ padding: '8px', background: 'var(--bg-hover)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Activity size={14} /> Live News Crawl
                </div>
                <span style={{ color: 'var(--text-primary)', fontSize: '11px', fontWeight: 'bold' }}>SCANNING</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <Newspaper size={14} /> Source Cross-Reference
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div className="flex-between" style={{ marginBottom: '6px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Global Economic Monitor</strong>
                  <CheckCircle size={12} color="var(--text-secondary)" />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Refutes claim of "unprecedented fiscal mismanagement" using 10-year data models.</div>
              </div>
              
              <div>
                <div className="flex-between" style={{ marginBottom: '6px' }}>
                  <strong style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Independent Audit Bureau</strong>
                  <AlertTriangle size={12} color="var(--text-secondary)" />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Flags statistical manipulation in paragraph 2 regarding structural deficits.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: The Target Artifact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <div className="flex-between" style={{ marginBottom: '24px' }}>
              <div className="card-title" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Artifact Analysis</div>
              <span className="badge" style={{ fontSize: '10px' }}><AlertTriangle size={12} /> HIGH BIAS</span>
            </div>
            
            <div style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-secondary)', padding: '24px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
              <p style={{ marginBottom: '20px' }}>
                The recent economic summit was a <span className="highlight-red">complete disaster</span>, characterized by what many consider to be <span className="highlight-yellow">unprecedented fiscal mismanagement</span>. Global markets reacted immediately, showing extreme volatility not seen since the late 90s.
              </p>
              <p>
                Furthermore, the leading administration officials appeared to be <span className="highlight-red">purposely obfuscating</span> the core issues, relying on heavily manipulated statistics rather than addressing the structural deficits highlighted by independent auditors.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px dashed var(--text-secondary)' }}></div>
                <span style={{ color: 'var(--text-muted)' }}>Subjective Language</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-secondary)' }}></div>
                <span style={{ color: 'var(--text-muted)' }}>Unverified Claim</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <ShieldCheck size={14} /> Synthesized Counter-Narrative
            </div>
            <div style={{ fontSize: '13px', marginBottom: '20px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              <strong style={{ color: 'var(--text-primary)' }}>TL;DR:</strong> The economic summit concluded with standard policy adjustments. Market volatility was within expected parameters for a post-summit period. No independent auditors have reported "unprecedented fiscal mismanagement."
            </div>
            <div style={{ padding: '16px', background: 'var(--bg-main)', borderRadius: 'var(--radius-sm)' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '16px', display: 'flex', justifyContent: 'center', marginTop: '2px', color: 'var(--text-muted)' }}>&bull;</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Markets stabilized completely within 48 hours.</div>
                </li>
                <li style={{ fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '16px', display: 'flex', justifyContent: 'center', marginTop: '2px', color: 'var(--text-muted)' }}>&bull;</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Auditors cited a standard 2% variance in structural deficits.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: AI Heuristics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card">
            <div className="card-title" style={{ marginBottom: '24px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <BarChart2 size={14} /> Emotional Intensity
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div className="flex-between" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)', letterSpacing: '0.5px' }}>AGGRESSION</span>
                  <span style={{ color: 'var(--text-primary)' }}>82%</span>
                </div>
                <div style={{ height: '2px', background: 'var(--bg-hover)', borderRadius: '1px', overflow: 'hidden' }}>
                  <div style={{ width: '82%', height: '100%', background: 'var(--text-primary)', borderRadius: '1px' }}></div>
                </div>
              </div>

              <div>
                <div className="flex-between" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)', letterSpacing: '0.5px' }}>OBJECTIVITY</span>
                  <span style={{ color: 'var(--text-primary)' }}>24%</span>
                </div>
                <div style={{ height: '2px', background: 'var(--bg-hover)', borderRadius: '1px', overflow: 'hidden' }}>
                  <div style={{ width: '24%', height: '100%', background: 'var(--text-secondary)', borderRadius: '1px' }}></div>
                </div>
              </div>

              <div>
                <div className="flex-between" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)', letterSpacing: '0.5px' }}>FEAR APPEAL</span>
                  <span style={{ color: 'var(--text-primary)' }}>65%</span>
                </div>
                <div style={{ height: '2px', background: 'var(--bg-hover)', borderRadius: '1px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: 'var(--text-primary)', borderRadius: '1px' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <Zap size={14} /> Vector Signatures
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '10px', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-primary)'}}></div> LINGUISTIC ANOMALY
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>High density of emotionally charged adjectives coupled with vague noun phrases.</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-primary)'}}></div> STRUCTURAL INCONSISTENCY
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>Logical leap between paragraphs. Missing transitional connective tissue.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .highlight-red {
          color: var(--text-primary);
          border-bottom: 2px dashed var(--text-muted);
          padding-bottom: 2px;
          cursor: crosshair;
        }
        .highlight-yellow {
          background: var(--bg-hover);
          color: var(--text-primary);
          padding: 2px 4px;
          border-radius: 4px;
          cursor: crosshair;
        }
      `}} />
    </div>
  );
}
