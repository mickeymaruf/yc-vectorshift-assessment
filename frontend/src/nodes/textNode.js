// textNode.js

import { useEffect, useRef, useState } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // auto resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        100
      )}px`;
    }
  }, [currText]);

  const variables = extractVariables(currText);
  const prevVarsRef = useRef([]);

  // auto connect/disconnect nodes based on variables
  useEffect(() => {
    // optimization: This avoids unnecessary looping over nodes
    // and edges when typing letters that don’t affect variables.
    const newVars = extractVariables(currText);
    const prevVars = prevVarsRef.current;

    if (JSON.stringify(newVars) === JSON.stringify(prevVars)) return;

    prevVarsRef.current = newVars;
    // --- ends ---

    console.log("trigger");
    const store = useStore.getState();
    const nodes = store.nodes;
    const edges = store.edges;

    // Connect nodes for new variables
    variables.forEach((varName) => {
      const sourceNode = nodes.find((node) => node.data.inputName === varName);
      if (sourceNode) {
        const isAlreadyConnected = edges.some(
          (edge) => edge.source === sourceNode.id && edge.target === id
        );
        if (!isAlreadyConnected) {
          store.onConnect({
            source: sourceNode.id,
            target: id,
          });
        }
      }
    });

    // Disconnect edges for removed variables
    edges.forEach((edge) => {
      const sourceNode = nodes.find((node) => node.id === edge.source);
      if (
        edge.target === id &&
        sourceNode?.data?.inputName &&
        !variables.includes(sourceNode.data.inputName)
      ) {
        useStore.getState().removeEdge(edge.source, edge.target);
      }
    });
  }, [variables, id]);

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
          placeholder: `Type {{variable}} to connect a node`,
        },
      ]}
      handles={[
        {
          id: `${id}-input`,
          type: "target",
          position: Position.Left,
        },
        {
          id: `${id}-output`,
          type: "source",
          position: Position.Right,
        },
      ]}
    />
  );
};

const extractVariables = (text) => {
  const regex = /{{([^{}]+)}}/g; // capture anything between {{ and }}, including spaces
  const vars = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.push(match[1]);
  }
  return vars;
};
