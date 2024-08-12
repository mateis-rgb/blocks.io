import { useCallback } from "react"
import { Handle, Position } from "reactflow"
import InputComponent from "../../components/InputComponent";

const NodeComponent = () => {
	const onChange = useCallback((e: any) => {
		console.log(e.target.value);
	}, []);

	return (
		<>
			<div className="bg-gray-200 p-2 flex flex-row items-center justify-center rounded-md border-2 border-black">
				<label className="mr-4">Text</label>

				<InputComponent type="text" color="green" name="text" onChange={onChange} className="nodrag" />
			</div>

			<Handle type="source" position={Position.Right} id="a" />
		</>
	);
}

export default NodeComponent;