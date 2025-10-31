// textNode.js

import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      fields={[
        {
          label: "Text",
          type: "text",
          value: currText,
          onChange: handleTextChange,
        },
      ]}
      handles={[
        {
          id: `${id}-output`,
          type: "source",
          position: Position.Right,
        },
      ]}
    />
  );
};
