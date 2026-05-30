export default function AlertCard({ alert }) {
  return (
    <div style={{
      border: "1px solid red",
      margin: 10,
      padding: 15,
      borderRadius: 10,
      background: "#111",
      color: "white"
    }}>
      
      <h3>🚨 {alert.label}</h3>
      <p>{alert.message}</p>

      {alert.imageUrl && (
        <img
          src={alert.imageUrl}
          style={{ width: "100%", marginTop: 10 }}
        />
      )}
    </div>
  );
}