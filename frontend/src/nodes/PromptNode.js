import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const PromptNode = ({ id }) => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Neutral");

  return (
    <BaseNode
      title="Prompt Node"
      fields={[
        {
          label: "Prompt",
          value: prompt,
          onChange: (e) => setPrompt(e.target.value),
        },
        {
          label: "Tone",
          type: "select",
          value: tone,
          onChange: (e) => setTone(e.target.value),
          options: ["Friendly", "Professional", "Neutral"],
        },
      ]}
      handles={[
        { id: `${id}-input`, type: "target", position: Position.Left },
        { id: `${id}-output`, type: "source", position: Position.Right },
      ]}
    />
  );
};
