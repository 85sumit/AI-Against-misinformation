"use client";
import React from 'react';
import { Settings, HelpCircle, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function TopHeader() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    switch(pathname) {
      case '/text-analysis': return 'Text Forensic Report';
      case '/audio-signal': return 'Audio Signal Analysis';
      case '/image-forensic': return 'Forensic Image Scan';
      case '/security': return 'Adversarial Defense Panel';
      case '/audit-logs': return 'Audit Logs & Provenance';
      case '/dashboard': return 'Command Center Dashboard';
      default: 
        if (!pathname || pathname === '/' || pathname === '/dashboard') return 'Command Center Dashboard';
        return pathname.replace('/', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
  };

  return (
    <header className="top-header">
      <div className="header-title">{getPageTitle()}</div>
      <div className="header-right">
        <button className="icon-btn">
          <Bell size={18} />
        </button>
        <button className="icon-btn">
          <Settings size={18} />
        </button>
        <button className="icon-btn">
          <HelpCircle size={18} />
        </button>
        <div className="user-avatar">
          <span style={{ fontSize: '14px', fontWeight: 600 }}>SA</span>
        </div>
      </div>
    </header>
  );
}
