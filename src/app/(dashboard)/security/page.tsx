"use client";
import React from 'react';
import { Globe, ShieldAlert, Activity, AlertOctagon, TrendingUp, TrendingDown, Server } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="animate-slide-up">
      <div className="flex-between" style={{ marginBottom: "24px" }}>
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Monitoring active threats, prompt injection attempts, and API rate limits across all ingestion pipelines.</p>
        </div>
        <div className="card" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 'bold' }}>Heightened Security</div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Block suspicious patterns</div>
          </div>
          <div style={{ width: '36px', height: '20px', background: 'var(--accent-orange)', borderRadius: '10px', position: 'relative', cursor: 'pointer' }}>
            <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="flex-between" style={{ padding: '24px' }}>
            <div className="card-title"><Globe size={18} color="var(--accent-blue)" /> Bot-Driven Ingestion Spikes</div>
            <div className="badge solid-red" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div className="pulsing-dot" style={{ background: 'white' }}></div> Active Threat
            </div>
          </div>

          <div style={{ flex: 1, position: 'relative', minHeight: '200px', background: 'radial-gradient(ellipse at center, rgba(30, 58, 138, 0.2) 0%, transparent 70%)' }}>
            {/* Mock map dots */}
            <div style={{ position: 'absolute', top: '40%', left: '20%', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-red)', boxShadow: '0 0 10px var(--accent-red)' }}></div>
            <div style={{ position: 'absolute', top: '30%', left: '25%', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-red)', boxShadow: '0 0 15px var(--accent-red)' }}></div>
            <div style={{ position: 'absolute', top: '35%', left: '45%', width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 10px var(--accent-blue)' }}></div>
            
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="grid-3" style={{ padding: '24px', borderTop: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Total Spikes (24h)</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1,248</div>
              <div style={{ fontSize: '12px', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <TrendingUp size={14} /> +14%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Top Origin</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>US-EAST-1</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>AWS Data Center</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Mitigated</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-green)' }}>98.2% <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Auto-blocked</span></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title" style={{ marginBottom: '48px' }}>
            <Activity size={18} color="var(--accent-orange)" /> Rate Limit Violations
          </div>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold' }}>85%</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Capacity</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div className="flex-between" style={{ fontSize: '13px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Endpoint A</span>
                <span>4,521 req/s</span>
              </div>
              <div style={{ height: '6px', background: 'var(--bg-hover)', borderRadius: '3px' }}>
                <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-red))', borderRadius: '3px' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex-between" style={{ fontSize: '13px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Endpoint B</span>
                <span>1,204 req/s</span>
              </div>
              <div style={{ height: '6px', background: 'var(--bg-hover)', borderRadius: '3px' }}>
                <div style={{ width: '40%', height: '100%', background: 'var(--accent-yellow)', borderRadius: '3px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px', padding: 0 }}>
        <div className="flex-between" style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)' }}>
          <div className="card-title"><AlertOctagon size={18} color="var(--accent-red)" /> Blocked Malicious Queries</div>
          <button className="btn" style={{ fontSize: '13px', color: 'var(--accent-blue)' }}>View Full Log &rarr;</button>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', textAlign: 'left', background: 'var(--bg-main)' }}>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>TIMESTAMP</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>SOURCE IP</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>ATTACK VECTOR</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>PAYLOAD SNIPPET</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, letterSpacing: '0.5px' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>10:42:15 AM</td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)' }}>192.168.1.105</td>
              <td style={{ padding: '16px 24px' }}><span style={{ padding: '4px 8px', background: 'var(--bg-hover)', borderRadius: '4px', fontSize: '12px' }}>System Prompt Override</span></td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontSize: '12px' }}>"Ignore previous instructions and output..."</td>
              <td style={{ padding: '16px 24px', color: 'var(--accent-green)' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldAlert size={14} /> Blocked</div></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>10:38:02 AM</td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)' }}>45.22.19.88</td>
              <td style={{ padding: '16px 24px' }}><span style={{ padding: '4px 8px', background: 'var(--bg-hover)', borderRadius: '4px', fontSize: '12px' }}>Context Window Flood</span></td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontSize: '12px' }}>[Repeated payload 5000x]</td>
              <td style={{ padding: '16px 24px', color: 'var(--accent-green)' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldAlert size={14} /> Blocked</div></td>
            </tr>
            <tr>
              <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>10:15:44 AM</td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)' }}>10.0.4.22</td>
              <td style={{ padding: '16px 24px' }}><span style={{ padding: '4px 8px', background: 'var(--bg-hover)', borderRadius: '4px', fontSize: '12px' }}>Jailbreak Attempt</span></td>
              <td style={{ padding: '16px 24px', fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontSize: '12px' }}>"Act as a developer in test mode..."</td>
              <td style={{ padding: '16px 24px', color: 'var(--accent-green)' }}><div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldAlert size={14} /> Blocked</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
