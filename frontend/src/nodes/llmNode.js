// llmNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      description="This is a LLM."
      handles={[
        {
          id: `${id}-system`,
          type: "target",
          position: Position.Left,
          style: { top: `${100 / 3}%` },
        },
        {
          id: `${id}-prompt`,
          type: "target",
          position: Position.Left,
          style: { top: `${200 / 3}%` },
        },
        { id: `${id}-response`, type: "source", position: Position.Right },
      ]}
    />
  );
};
