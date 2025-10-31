import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("Add");

  return (
    <BaseNode
      title="Math Node"
      fields={[
        {
          label: "Operation",
          type: "select",
          value: operation,
          onChange: (e) => setOperation(e.target.value),
          options: ["Add", "Subtract", "Multiply", "Divide"],
        },
      ]}
      handles={[
        {
          id: `${id}-a`,
          type: "target",
          position: Position.Left,
          style: { top: "40%" },
        },
        {
          id: `${id}-b`,
          type: "target",
          position: Position.Left,
          style: { top: "70%" },
        },
        { id: `${id}-result`, type: "source", position: Position.Right },
      ]}
    />
  );
};
