// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      title="Input"
      fields={[
        {
          label: "Name",
          type: "text",
          value: currName,
          onChange: handleNameChange,
        },
        {
          label: "Type",
          type: "select",
          value: inputType,
          onChange: handleTypeChange,
          options: ["Text", "File"],
        },
      ]}
      handles={[
        { id: `${id}-value`, type: "source", position: Position.Right },
      ]}
    />
  );
};
