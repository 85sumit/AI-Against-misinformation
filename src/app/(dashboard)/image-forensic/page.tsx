"use client";
import React from 'react';
import { Download, Crosshair, Map, Activity, FileDigit, AlertCircle } from 'lucide-react';

export default function ImageForensicPage() {
  return (
    <div className="animate-slide-up">
      <div className="flex-between" style={{ marginBottom: "24px" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>File: IMG_EVT_7749.JPG</span>
          <span className="badge red">
            <AlertCircle size={14} /> High Probability Manipulation
          </span>
        </div>
        <button className="btn btn-outline" style={{ background: 'var(--bg-panel)' }}>
          <Download size={16} /> Export
        </button>
      </div>

      <div className="dashboard-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '20px', margin: 0, fontFamily: 'var(--font-outfit)' }}>Forensic Image Scan</h2>
            </div>
            
            <div style={{ position: 'relative', width: '100%', height: '400px', background: 'var(--bg-sidebar)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Mock Image Content */}
               <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', opacity: 0.8 }}>
                 <Map size={48} />
                 <span>[ Crowd Event Photograph View ]</span>
               </div>
               
               {/* Scanner Box */}
               <div style={{ position: 'absolute', top: '30%', left: '40%', width: '120px', height: '140px', border: '2px dashed var(--accent-red)', background: 'rgba(220, 38, 38, 0.05)' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '20px', height: '20px', borderTop: '2px solid var(--accent-red)', borderRight: '2px solid var(--accent-red)' }}></div>
                  <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '20px', height: '20px', borderBottom: '2px solid var(--accent-red)', borderLeft: '2px solid var(--accent-red)' }}></div>
               </div>

               <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '80px', height: '80px', border: '2px dashed var(--accent-orange)' }}></div>

               {/* Scanner Toggles */}
               <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                 <div style={{ padding: '6px 16px', background: 'var(--bg-panel)', fontSize: '13px', cursor: 'pointer', fontWeight: 500 }}>Original</div>
                 <div style={{ padding: '6px 16px', background: 'var(--bg-hover)', fontSize: '13px', cursor: 'pointer', borderLeft: '1px solid var(--border-color)' }}>Noise Map</div>
                 <div style={{ padding: '6px 16px', background: 'var(--bg-hover)', fontSize: '13px', cursor: 'pointer', borderLeft: '1px solid var(--border-color)' }}>Heatmap</div>
               </div>
            </div>
          </div>

          <div className="card">
            <div className="flex-between" style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <span>Overall Authenticity Score</span>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-red)' }}>12%</span>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg, var(--accent-red) 0%, var(--accent-orange) 50%, var(--accent-green) 100%)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-4px', left: '12%', width: '4px', height: '16px', background: 'var(--text-primary)', borderRadius: '2px' }}></div>
            </div>
            <div className="flex-between" style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>Highly Manipulated</span>
              <span>Uncertain</span>
              <span>Verified Authentic</span>
            </div>
          </div>

        </div>

        {/* Right side*/}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card">
            <div className="card-title" style={{ marginBottom: '20px' }}>
              <Crosshair size={16} color="var(--text-secondary)" /> Anomaly Detection
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-red)', background: 'var(--bg-hover)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                <div className="flex-between" style={{ marginBottom: '8px' }}>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Facial Symmetry (GAN)</strong>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>94%</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Pupil misalignment and asymmetrical ear rendering typical of StyleGAN3 synthesis detected in central subject.
                </div>
              </div>

              <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-orange)', background: 'var(--bg-hover)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                <div className="flex-between" style={{ marginBottom: '8px' }}>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Illumination Inconsistency</strong>
                  <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>82%</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Shadow trajectory angles diverge by 14&deg; indicating composite subject insertion from distinct lighting environments.
                </div>
              </div>

              <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-green)', background: 'var(--bg-hover)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                <div className="flex-between" style={{ marginBottom: '8px' }}>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>JPEG Error Level Analysis</strong>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>15%</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Compression blocks appear uniform. No localized re-saving artifacts detected in this layer.
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: '20px' }}>
              <FileDigit size={16} color="var(--text-secondary)" /> Metadata Provenance
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Camera:</span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 500 }}>Missing / Stripped</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Software:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Adobe Photoshop 24.1</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Color Space:</span>
                <span style={{ color: 'var(--text-secondary)' }}>sRGB</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Original Date:</span>
                <span style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-inter)' }}>2023-10-14T08:22:11Z</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Modify Date:</span>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-inter)' }}>2023-10-15T19:45:00Z</span>
              </div>
            </div>

            <div className="grid-2" style={{ marginTop: '24px' }}>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid rgba(220, 38, 38, 0.2)', padding: '12px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Digital Sig</div>
                <div style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '13px' }}>Invalid</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>GPS Data</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 'bold', fontSize: '13px' }}>None</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
