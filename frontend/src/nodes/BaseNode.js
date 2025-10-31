import { Handle } from "reactflow";

const BaseNode = ({ title, fields = [], handles = [], description }) => {
  return (
    <div
      style={{
        width: 220,
        border: "1px solid #333",
        borderRadius: 8,
        padding: 10,
        background: "#fff",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 6 }}>{title}</div>
      {description && (
        <div>
          <span>{description}</span>
        </div>
      )}

      {fields.map(({ label, value, onChange, type = "text", options }, i) => (
        <div key={i} style={{ marginBottom: 4 }}>
          <label>
            {label}:{" "}
            {type === "select" ? (
              <select value={value} onChange={onChange}>
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input type={type} value={value} onChange={onChange} />
            )}
          </label>
        </div>
      ))}

      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
