import ActionComponent from "./components/ActionComponent";
import { FaSave, FaUpload, FaPlay, FaCogs } from "react-icons/fa";

const Toolbox = () => {
	return (
		<div className="bg-gray-800 text-white mx-1O h-20 p-2 px-4 gap-3 rounded-lg flex items-center justify-center">
			<ActionComponent color="green" icon={FaUpload} />
			<ActionComponent color="green" icon={FaSave} />
			<ActionComponent color="green" icon={FaCogs} />
			<ActionComponent color="green" icon={FaPlay} />
		</div>
	)
}

export default Toolbox;