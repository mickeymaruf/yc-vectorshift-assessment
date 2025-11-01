// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();
      console.log("Response:", data);

      const message = `Pipeline parsed successfully!
Number of nodes: ${data.num_nodes}
Number of edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes" : "No"}`;
      alert(message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-3 py-2 rounded-lg duration-200 cursor-pointer active:scale-95 shadow-lg"
      >
        Submit
      </button>
    </div>
  );
};
