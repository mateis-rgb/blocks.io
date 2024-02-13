import { useCallback } from "react"
import { Handle, Position } from "reactflow"

const NodeComponent = () => {
	const onChange = useCallback((e: any) => {
		console.log(e.target.value);
		
	}, []);

	return (
		<>
			<div>
				<label>Write Text:</label>
				<input type="text" name="text" onChange={onChange} className="nodrag" />
			</div>

			<Handle type="source" position={Position.Bottom} id="a" />
		</>
	);
}

export default NodeComponent;