import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import initialNodes from "./node.ts";
import initialEdges from "./edge.ts";

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodeChange = useCallback(
    (x:any) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );

  const onEdgeChange = useCallback(
    (x:any) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );

  const onEdgeConnect = useCallback(
    (x:any) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodeChange}
      onEdgesChange={onEdgeChange}
      onConnect={onEdgeConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
export default Flow;