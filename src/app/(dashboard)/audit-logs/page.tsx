"use client";
import React from 'react';
import { Search, Filter, ShieldCheck, Database, Link as LinkIcon, AlertTriangle, Activity, Globe } from 'lucide-react';

export default function AuditLogsPage() {
  return (
    <div className="animate-slide-up">
      <div className="flex-between" style={{ marginBottom: "24px" }}>
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Immutable record of system actions, analysis pathways, and manual interventions.<br/>Cryptographically hashed for data integrity.</p>
        </div>
        <div style={{ display: 'flex', background: 'var(--bg-panel)', borderRadius: 'var(--radius-md)', padding: '4px', border: '1px solid var(--border-color)' }}>
          <button style={{ padding: '6px 16px', background: 'var(--bg-hover)', borderRadius: 'var(--radius-sm)', fontSize: '13px', color: 'var(--text-primary)' }}>Live Feed</button>
          <button style={{ padding: '6px 16px', borderRadius: 'var(--radius-sm)', fontSize: '13px', color: 'var(--text-secondary)' }}>Archive</button>
        </div>
      </div>

      <div className="card" style={{ padding: '16px', marginBottom: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '12px' }} />
          <input 
            type="text" 
            placeholder="Search hash, actor, or artifact..." 
            style={{ width: '100%', background: 'var(--bg-main)', border: '1px solid var(--border-color)', padding: '10px 16px 10px 42px', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', outline: 'none' }}
          />
        </div>
        <button className="btn btn-outline" style={{ display: 'flex', gap: '8px', background: 'var(--bg-main)' }}>
          <Filter size={16} /> Action Type: All
        </button>
        <div className="btn btn-outline" style={{ display: 'flex', gap: '8px', background: 'var(--bg-main)', alignItems: 'center' }}>
          <ShieldCheck size={16} color="var(--accent-orange)" /> Cyber Domain Req
          <div style={{ width: '28px', height: '16px', background: 'var(--bg-hover)', borderRadius: '8px', position: 'relative', cursor: 'pointer', marginLeft: '4px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--accent-orange)', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', textAlign: 'left', background: 'var(--bg-main)' }}>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>TIMESTAMP (UTC)</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>ACTOR</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>ACTION TYPE</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>DETAILS & PROVENANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '20px 24px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>2023-10-27 14:32:01.442</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--accent-blue)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Activity size={12} color="#fff" /></div>
                  <span style={{ fontWeight: 500 }}>Prism Engine V4</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ padding: '4px 8px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                   <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div> Analysis Pathway
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>Evaluated payload [ART-992A] against heuristics</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Database size={12} /> Logic: Natural Language Processing &gt; Entity Extraction
                </div>
              </td>
            </tr>

            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '20px 24px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>2023-10-27 14:28:15.009</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>JS</div>
                  <span style={{ fontWeight: 500 }}>J. Smith (Admin)</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ padding: '4px 8px', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)', color: 'var(--accent-red)', borderRadius: '4px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                   <AlertTriangle size={12} /> Manual Override
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>Force-flagged artifact [ART-811C] as Misinformation</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>&#128172; Reason:</span> "Out of context image verify pending."
                </div>
              </td>
            </tr>

            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '20px 24px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>2023-10-27 14:25:00.112</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--bg-hover)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Database size={12} color="var(--text-secondary)" /></div>
                  <span style={{ fontWeight: 500 }}>Data Node Alpha</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ padding: '4px 8px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                   <Database size={12} /> DB Write
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>Committed daily threat intel definitions</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Target: Global Ruleset v2.4.1
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '20px 24px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>2023-10-27 14:15:22.871</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'var(--accent-blue)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Activity size={12} color="#fff" /></div>
                  <span style={{ fontWeight: 500 }}>Prism Net-Scan</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ padding: '4px 8px', border: '1px solid rgba(245,158,11,0.3)', color: 'var(--accent-orange)', borderRadius: '4px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                   <Globe size={12} /> Domain Analysis
                </span>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>Checked registrar history for flagged source</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <LinkIcon size={12} /> Target: suspect-news-daily.co (Match found)
                </div>
              </td>
            </tr>

          </tbody>
        </table>
        
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '13px' }}>
          Showing 1 to 4 of 1,024 entries
        </div>
      </div>
    </div>
  );
}
