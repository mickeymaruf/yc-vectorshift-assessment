import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  return (
    <BaseNode
      title="API Node"
      fields={[
        {
          label: "Endpoint",
          value: url,
          onChange: (e) => setUrl(e.target.value),
        },
        {
          label: "Method",
          type: "select",
          value: method,
          onChange: (e) => setMethod(e.target.value),
          options: ["GET", "POST", "PUT", "DELETE"],
        },
      ]}
      handles={[
        { id: `${id}-request`, type: "target", position: Position.Left },
        { id: `${id}-response`, type: "source", position: Position.Right },
      ]}
    />
  );
};
