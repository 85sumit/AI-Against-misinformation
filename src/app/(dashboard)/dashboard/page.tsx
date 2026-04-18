export default function DashboardPage() {
  return (
    <div className="animate-slide-up">
      <div className="flex-between" style={{ marginBottom: "24px" }}>
        <div>
          <h1 className="page-title">Command Center Overview</h1>
          <p className="page-subtitle">Real-time monitoring across all ingestion pipelines</p>
        </div>
      </div>
      
      <div className="grid-3" style={{ marginBottom: "24px" }}>
        <div className="card">
          <div className="card-title" style={{ color: "var(--text-secondary)" }}>Total Processed (24h)</div>
          <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "8px" }}>142,894</div>
          <div style={{ fontSize: "12px", color: "var(--accent-green)", marginTop: "4px" }}>+12% from yesterday</div>
        </div>
        <div className="card" style={{ border: "1px solid rgba(239, 68, 68, 0.3)" }}>
          <div className="card-title" style={{ color: "var(--text-secondary)" }}>Active Threats Detected</div>
          <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "8px", color: "var(--accent-red)" }}>1,248</div>
          <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>High severity items flagged</div>
        </div>
        <div className="card">
          <div className="card-title" style={{ color: "var(--text-secondary)" }}>System Load</div>
          <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "8px" }}>42%</div>
          <div style={{ fontSize: "12px", color: "var(--accent-green)", marginTop: "4px" }}>Normal capacity</div>
        </div>
      </div>
    </div>
  );
}
