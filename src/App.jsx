import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import KPI from './components/KPI'
import Card from './components/Card'
import ActivityFeed from './components/ActivityFeed'
import StatusPanel from './components/StatusPanel'
import Overview from './pages/Overview'
import Revenue from './pages/Revenue'
import Users from './pages/Users'
import Automations from './pages/Automations'
import Logs from './pages/Logs'
import Settings from './pages/Settings'
import { mockData } from './data/mock'
import './styles.css'

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Topbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/users" element={<Users />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>

          <section className="dashboard-widgets">
            <div className="kpi-row">
              <KPI label="Monthly Revenue" value={`$${mockData.revenue.monthly.toLocaleString()}`} />
              <KPI label="Growth" value={`${mockData.revenue.growth}%`} />
              <KPI label="Active Users" value={mockData.users.length} />
            </div>

            <div className="grid">
              <Card title="Activity">
                <ActivityFeed />
              </Card>
              <Card title="System Status">
                <StatusPanel />
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}