"use client";
import React from 'react';
import { Video, Clock, AlertTriangle, CheckCircle, Search } from 'lucide-react';

export default function VideoTimelinePage() {
  return (
    <div className="animate-slide-up">
      {/* Top Header Section */}
      <div className="flex-between" style={{ marginBottom: "32px", borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div className="pulsing-dot"></div> Video processing active
            </span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Target: Suspect News Interview Clip</div>
        </div>
        
        <div className="header-right" style={{ display: 'flex', gap: '16px' }}>
          <button className="btn btn-outline" style={{ height: '100%' }}>
            <Search size={16} /> New Scan
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        <div className="card">
          <div className="card-title" style={{ marginBottom: '20px', fontSize: '15px' }}>
            <Video size={16} /> Temporal Analysis Timeline
          </div>
          
          <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)' }}>
             <Clock size={32} color="var(--text-muted)" style={{ margin: '0 auto 16px' }} />
             <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Timeline Extraction In Progress</h3>
             <p style={{ color: 'var(--text-secondary)', fontSize: '13px', maxWidth: '400px', margin: '0 auto' }}>
               Deepfake heuristics and visual-audio sync analysis are currently scanning the video frames. Results will populate here shortly.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
