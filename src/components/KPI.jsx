export default function KPI({ title, label, value, change }) {
  const heading = title || label
  const up = String(change || '').startsWith('+')
  return (
    <div className="kpi-card">
      <div className="kpi-row">
        <div>
          <p className="kpi-label">{heading}</p>
          <p className="kpi-value">{value}</p>
        </div>
        <div className={`kpi-change ${up ? 'up' : 'down'}`}>{change}</div>
      </div>
    </div>
  )
}