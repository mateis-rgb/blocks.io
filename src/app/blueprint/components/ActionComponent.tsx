import clsx from "clsx";
import { ActionProps } from "src/app/props";

const ActionComponent: React.FC<ActionProps> = ({ color, className, icon: Icon, handleClick }) => {
	return (
		<>
		<button
			className={clsx(
				"border-2 transition focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center",
				`text-${color}-700 dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-gray-200 dark:focus:ring-${color}-800 focus:ring-${color}-300 hover:border-gray-200 border-${color}-700 hover:text-gray-200`,
				className
			)}
			onClick={handleClick}
		>
			<Icon className="w-6 h-6" />
		</button>
	</>
	);
}

export default ActionComponent;