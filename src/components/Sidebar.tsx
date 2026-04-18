"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, Activity, Image as ImageIcon, Video, History,
  LayoutDashboard, Server, FileDigit, Shield, Users, LogOut, ShieldAlert
} from 'lucide-react';

const clinicalNav = [
  { name: 'Text Analysis', href: '/text-analysis', icon: FileText },
  { name: 'Audio Signal', href: '/audio-signal', icon: Activity },
  { name: 'Image Forensic', href: '/image-forensic', icon: ImageIcon },
  { name: 'Video Timeline', href: '/video-timeline', icon: Video },
  { name: 'History', href: '/history', icon: History },
];

const commandNav = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'System Health', href: '/system-health', icon: Server },
  { name: 'Audit Logs', href: '/audit-logs', icon: FileDigit },
  { name: 'Security', href: '/security', icon: Shield },
  { name: 'Users', href: '/users', icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">S</div>
        <div>
          <div className="brand-name">sachcheck.in</div>
        </div>
      </div>

      <div className="sidebar-group">
        <div style={{ padding: '4px 12px', margin: '0 12px 8px 12px', background: 'var(--accent-blue)', color: '#ffffff', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px' }}>
          Clinical Lens
        </div>
        <nav className="sidebar-nav">
          {clinicalNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`nav-item ${isActive ? 'active' : ''}`}>
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-group" style={{ marginTop: '16px' }}>
        <div style={{ padding: '4px 12px', margin: '0 12px 8px 12px', background: 'var(--accent-blue)', color: '#ffffff', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px' }}>
          Command Center
        </div>
        <nav className="sidebar-nav">
          {commandNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`nav-item ${isActive ? 'active' : ''}`}>
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-nav">
          <Link href="/safety" className="nav-item">
            <ShieldAlert size={18} />
            Safety Protocols
          </Link>
          <button className="nav-item" style={{ width: '100%', textAlign: 'left', marginTop: '4px' }}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
