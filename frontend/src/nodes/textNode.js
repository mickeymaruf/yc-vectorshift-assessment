// textNode.js

import { useEffect, useRef, useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        100
      )}px`;
    }
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      fields={[
        {
          label: "Text",
          type: "textarea",
          value: currText,
          onChange: handleTextChange,
          ref: textareaRef,
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
