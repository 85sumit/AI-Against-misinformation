"use client";
import React from 'react';
import { History, Search, Download } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="animate-slide-up">
      {/* Top Header Section */}
      <div className="flex-between" style={{ marginBottom: "32px", borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <History size={20} /> Scan History
            </span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Past analyses and detailed extraction logs.</div>
        </div>
        
        <div className="header-right" style={{ display: 'flex', gap: '16px' }}>
          <button className="btn btn-outline" style={{ height: '100%' }}>
            <Search size={16} /> Filter
          </button>
          <button className="btn btn-primary" style={{ height: '100%' }}>
            <Download size={16} /> Export Logs
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        <div className="card">
          <div className="card-title" style={{ marginBottom: '20px', fontSize: '15px' }}>
            Recent Activity
          </div>
          
          <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>No history logs found for this session.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
