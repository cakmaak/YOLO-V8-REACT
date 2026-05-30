import AlertCard from "./AlertCard";

export default function AlertList({ alerts }) {
  return (
    <div>
      {alerts.map((a, i) => (
        <AlertCard key={i} alert={a} />
      ))}
    </div>
  );
}