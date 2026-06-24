import KPI from "../components/KPI";
import ActivityFeed from "../components/ActivityFeed";
import StatusPanel from "../components/StatusPanel";
import { kpis } from "../data/mock";

export default function Overview() {
  return (
    <div>
      <div className="grid">
        {kpis.map((k, i) => (
          <KPI key={i} {...k} />
        ))}
      </div>

      <div className="grid2">
        <ActivityFeed />
        <StatusPanel />
      </div>
    </div>
  );
}