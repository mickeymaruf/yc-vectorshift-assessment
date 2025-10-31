import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("Equals");
  const [inputValue, setInputValue] = useState("");

  return (
    <BaseNode
      title="Condition Node"
      fields={[
        {
          label: "Condition",
          type: "select",
          value: condition,
          onChange: (e) => setCondition(e.target.value),
          options: ["Equals", "Greater", "Less", "Contains"],
        },
        {
          label: "Value",
          type: "text",
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
        },
      ]}
      handles={[
        {
          id: `${id}-inputA`,
          type: "target",
          position: Position.Left,
          style: { top: "35%" },
        },
        {
          id: `${id}-inputB`,
          type: "target",
          position: Position.Left,
          style: { top: "65%" },
        },
        {
          id: `${id}-true`,
          type: "source",
          position: Position.Right,
          style: { top: "35%" },
        },
        {
          id: `${id}-false`,
          type: "source",
          position: Position.Right,
          style: { top: "65%" },
        },
      ]}
    />
  );
};
