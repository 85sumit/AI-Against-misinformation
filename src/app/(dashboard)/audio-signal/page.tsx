"use client";
import React from 'react';
import { AlertCircle, Mic, Activity, Flag, FileAudio } from 'lucide-react';

export default function AudioSignalPage() {
  return (
    <div className="animate-slide-up">
      <div className="flex-between" style={{ marginBottom: "24px" }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileAudio size={16} /> File: REC_MODI_SPEECH_04.wav &bull; Duration: 04:12 &bull; Processing: Real-time
        </div>
        <div className="badge solid-red" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '13px' }}>
          <AlertCircle size={16} /> HIGH RISK: Synthetic markers detected
        </div>
      </div>

      <div className="dashboard-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Waveform card */}
          <div className="card">
            <div className="flex-between" style={{ marginBottom: '24px' }}>
              <div className="card-title"><Activity size={18} color="var(--accent-blue)" /> Voice Clone Phase Analysis</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="icon-btn" style={{ width: '28px', height: '28px' }}>+</button>
                <button className="icon-btn" style={{ width: '28px', height: '28px' }}>-</button>
              </div>
            </div>
            
            <div style={{ position: 'relative', height: '180px', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center' }}>
              {/* Mock Waveform */}
              <div style={{ width: '100%', height: '80px', background: 'repeating-linear-gradient(90deg, rgba(245, 158, 11, 0.4) 0px, rgba(245, 158, 11, 0.4) 2px, transparent 2px, transparent 4px)', opacity: 0.7 }}></div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '35%', width: '2px', background: 'var(--accent-orange)' }}>
                <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-orange)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-orange)' }}></div>
                <div style={{ position: 'absolute', top: '25%', left: '8px', background: 'var(--accent-orange)', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                  PHASE_MISALIGNMENT_0.42ms
                </div>
              </div>
            </div>
            <div className="flex-between" style={{ marginTop: '16px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>00:00.00</span>
              <span>01:14.23</span>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>02:30.45</span>
              <span>03:45.12</span>
              <span>04:12.00</span>
            </div>
          </div>

          {/* Transcript */}
          <div className="card">
            <div className="flex-between" style={{ marginBottom: '24px' }}>
              <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mic size={18} /> Bhashini ASR Transcript 
                <span className="badge" style={{ background: 'var(--bg-hover)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', textTransform: 'none' }}>Hindi &rarr; English</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div className="pulsing-dot" style={{ background: 'var(--accent-green)' }}></div> Real-time Sync
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', minWidth: '45px' }}>02:15</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>...economic growth has been substantial over the last quarter, reflecting our robust policies...</div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--accent-red)', fontFamily: 'var(--font-mono)', minWidth: '45px', marginTop: '12px' }}>02:30</div>
                <div style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '3px solid var(--accent-red)', padding: '12px 16px', borderRadius: '4px', flex: 1 }}>
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', marginBottom: '12px' }}>We will implement immediate sweeping changes to the tax structure next week, targeting specific demographics...</div>
                  <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    [ASR Confidence: <span style={{ color: 'var(--accent-red)', marginLeft: '4px' }}>98%</span> | Vocal Consistency: <span style={{ color: 'var(--accent-red)', marginLeft: '4px' }}>24%</span>]
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', minWidth: '45px' }}>02:45</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>...ensuring stability for international investors moving forward.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side*/}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
              Synthetic Probability
            </div>
            <div style={{ fontSize: '64px', fontWeight: 'bold', color: 'var(--accent-red)', lineHeight: '1', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              87<span style={{ fontSize: '32px', color: 'var(--text-secondary)' }}>%</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '16px', marginBottom: '24px', lineHeight: '1.5' }}>
              High likelihood of AI generation via Voice Cloning.
            </div>
            
            <div style={{ height: '6px', background: 'var(--bg-hover)', borderRadius: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '87%', background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-red))', borderRadius: '3px' }}></div>
            </div>
            <div className="flex-between" style={{ marginTop: '8px', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              <span>Authentic</span>
              <span>Synthetic</span>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px' }}>
              Forensic Signatures
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div className="flex-between" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={14} /> Spectral Artifacts</span>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '12px' }}>High</span>
                </div>
                <div style={{ height: '4px', background: 'var(--bg-hover)', borderRadius: '2px' }}>
                  <div style={{ width: '92%', height: '100%', background: 'var(--accent-red)', borderRadius: '2px' }}></div>
                </div>
              </div>

              <div>
                <div className="flex-between" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={14} /> Breathing Patterns</span>
                  <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold', fontSize: '12px' }}>Anomalous</span>
                </div>
                <div style={{ height: '4px', background: 'var(--bg-hover)', borderRadius: '2px' }}>
                  <div style={{ width: '75%', height: '100%', background: 'var(--accent-orange)', borderRadius: '2px' }}></div>
                </div>
              </div>

              <div>
                <div className="flex-between" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={14} /> Background Noise</span>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '12px' }}>Natural</span>
                </div>
                <div style={{ height: '4px', background: 'var(--bg-hover)', borderRadius: '2px' }}>
                  <div style={{ width: '20%', height: '100%', background: 'var(--accent-green)', borderRadius: '2px' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center' }}>
              <FileAudio size={18} /> Generate Final Report
            </button>
            <button className="btn card" style={{ width: '100%', padding: '16px', justifyContent: 'center' }}>
              <Flag size={18} /> Flag for Review
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
