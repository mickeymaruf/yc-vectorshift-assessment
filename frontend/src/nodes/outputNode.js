// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      title="Output"
      fields={[
        {
          type: "text",
          label: "Name",
          value: currName,
          onChange: handleNameChange,
        },
        {
          label: "Type",
          type: "select",
          value: outputType,
          onChange: handleTypeChange,
          options: ["Text", "Image"],
        },
      ]}
      handles={[{ id: `${id}-value`, type: "target", position: Position.Left }]}
    />
  );
};
