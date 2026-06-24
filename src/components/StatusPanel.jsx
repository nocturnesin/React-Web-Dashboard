const systems = [
  { name: "API Gateway", status: "OK" },
  { name: "Database", status: "OK" },
  { name: "Queue", status: "Degraded" },
  { name: "AI Engine", status: "OK" }
];

export default function StatusPanel() {
  return (
    <div className="card">
      <h3>System Health</h3>
      {systems.map((s, i) => (
        <div key={i} className="status">
          <span>{s.name}</span>
          <b className={`status-b ${String(s.status).toLowerCase()}`}>{s.status}</b>
        </div>
      ))}
    </div>
  );
}