export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <input className="search" placeholder="Search systems..." aria-label="Search" />
      </div>

      <div className="topbar-right">
        <button className="icon-btn" aria-label="notifications">🔔</button>
        <div className="avatar">AD</div>
      </div>
    </div>
  );
}