import { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const ImageNode = ({ id }) => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      title="Image Node"
      fields={[
        {
          label: "Image URL",
          value: url,
          onChange: (e) => setUrl(e.target.value),
        },
      ]}
      handles={[
        { id: `${id}-image`, type: "source", position: Position.Right },
      ]}
    />
  );
};
