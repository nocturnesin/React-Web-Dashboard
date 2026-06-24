import { activity } from "../data/mock";

export default function ActivityFeed() {
  return (
    <div className="card">
      <h3>Live Activity</h3>
      {activity.map((a, i) => (
        <p key={i}>• {a}</p>
      ))}
    </div>
  );
}