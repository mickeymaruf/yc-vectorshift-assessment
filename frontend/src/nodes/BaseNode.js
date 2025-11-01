import { Handle } from "reactflow";

const BaseNode = ({ title, fields = [], handles = [], description }) => {
  return (
    <div className="w-56 border border-[#b7aaf7] rounded-lg bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-1 bg-[#f5f3ff] border-b border-[#b7aaf7] px-3 py-2">
        <div className="font-medium text-sm text-gray-900">{title}</div>
        {description && (
          <p className="text-[11px] text-gray-500">{description}</p>
        )}
      </div>

      {/* Fields */}
      <div className="p-3 space-y-3">
        {fields.map(
          (
            {
              label,
              value,
              onChange,
              type = "text",
              options,
              ref,
              placeholder,
            },
            i
          ) => (
            <div key={i} className="flex flex-col text-sm">
              {label && (
                <label className="text-gray-700 text-xs mb-1">{label}</label>
              )}

              {type === "select" ? (
                <select
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-[#7e57c2] focus:outline-none"
                >
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              ) : type === "textarea" ? (
                <textarea
                  value={value}
                  onChange={onChange}
                  ref={ref}
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-[#7e57c2] focus:outline-none resize-none"
                />
              ) : (
                <input
                  type={type}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-[#7e57c2] focus:outline-none"
                />
              )}
            </div>
          )
        )}
      </div>

      {/* React Flow Handles */}
      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{
            background: "#7e57c2",
            width: 10,
            height: 10,
            borderRadius: "50%",
            border: "2px solid white",
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
