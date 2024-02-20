import { useCallback, useState } from 'react';
import ReactFlow, { MiniMap, Background, Controls, Panel, applyNodeChanges, applyEdgeChanges, addEdge, Edge, Node, OnEdgesChange, OnNodesChange, OnConnect, NodeTypes } from 'reactflow';
import Toolbox from './Toolbox';
import NodeComponent from './components/NodeComponent';

import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
	{ id: '1', type: "node-comp", data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
	{ id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
];
 
const customTypes: NodeTypes = { "node-comp": NodeComponent };

const Blueprint = () => {
	const [nodes, setNodes] = useState<Node[]>(initialNodes);
	const [edges, setEdges] = useState<Edge[]>([]);

	const onNodesChange: OnNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)), 
		[setNodes]
	);


	const onEdgesChange: OnEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	);

	const onConnect: OnConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	const handleSave = () => {
		localStorage.setItem("nodes", JSON.stringify(nodes));
		localStorage.setItem("edges", JSON.stringify(edges));
	}
 
	return (
		<div className='h-screen w-screen'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				nodeTypes={customTypes}
			>
				<Panel position='top-left'>
					<Toolbox />
				</Panel>
				
				<MiniMap />
				
				<Controls />
				
				<Background variant="dots" gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}

export default Blueprint;