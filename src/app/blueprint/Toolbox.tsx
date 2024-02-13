import ActionComponent from "./components/ActionComponent";
import { FaSave, FaUpload, FaPlay, FaCogs } from "react-icons/fa";

const Toolbox = () => {
	return (
		<div className="bg-gray-800 text-white mx-1O h-20 p-2 px-4 gap-3 rounded-lg flex items-center justify-center">
			<ActionComponent color="blue" icon={FaUpload} />
			<ActionComponent color="blue" icon={FaSave} />
			<ActionComponent color="blue" icon={FaCogs} />
			<ActionComponent color="blue" icon={FaPlay} />
		</div>
	)
}

export default Toolbox;