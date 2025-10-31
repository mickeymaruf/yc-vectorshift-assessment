import { Handle } from "reactflow";

function BaseNode({ title, fields = [], handles = [], description }) {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>{title}</span>
      </div>
      {description && (
        <div>
          <span>{description}</span>
        </div>
      )}

      <div>
        {fields.map(({ label, type, value, onChange, options }, i) => (
          <label key={i}>
            {label}:
            {type === "text" && (
              <input type={type} value={value} onChange={onChange} />
            )}
            {type === "select" && (
              <select value={value} onChange={onChange}>
                {options.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            )}
          </label>
        ))}
      </div>

      {handles.map(({ id, type, position, style }) => (
        <Handle
          key={id}
          type={type}
          position={position}
          id={id}
          style={style}
        />
      ))}
    </div>
  );
}

export default BaseNode;
