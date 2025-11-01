// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  InputOutlined,
  SmartToyOutlined,
  OutputOutlined,
  TextFieldsOutlined,
  FunctionsOutlined,
  ImageOutlined,
  ChatOutlined,
  CloudOutlined,
  CompareArrowsOutlined,
} from "@mui/icons-material";

export const PipelineToolbar = () => {
  const nodes = [
    {
      type: "customInput",
      label: "Input",
      icon: <InputOutlined />,
    },
    { type: "llm", label: "LLM", icon: <SmartToyOutlined /> },
    {
      type: "customOutput",
      label: "Output",
      icon: <OutputOutlined />,
    },
    {
      type: "text",
      label: "Text",
      icon: <TextFieldsOutlined />,
    },
    {
      type: "math",
      label: "Math",
      icon: <FunctionsOutlined />,
    },
    {
      type: "image",
      label: "Image",
      icon: <ImageOutlined />,
    },
    {
      type: "prompt",
      label: "Prompt",
      icon: <ChatOutlined />,
    },
    { type: "api", label: "API", icon: <CloudOutlined /> },
    {
      type: "condition",
      label: "Condition",
      icon: <CompareArrowsOutlined />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 border-b border-gray-200 bg-gray-50">
      {nodes.map((node) => (
        <DraggableNode key={node.type} {...node} />
      ))}
    </div>
  );
};
