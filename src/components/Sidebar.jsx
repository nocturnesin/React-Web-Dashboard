import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">NEXA OPS</h2>

      <NavLink to="/">Overview</NavLink>
      <NavLink to="/revenue">Revenue</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/automations">Automations</NavLink>
      <NavLink to="/logs">Logs</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}