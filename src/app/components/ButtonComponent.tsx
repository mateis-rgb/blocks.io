import { ButtonProps } from "../props";
import clsx from "clsx";

const ButtonComponent: React.FC<ButtonProps> = ({ label, className, color, handleClick }) => {
	return (
		<button 
			className={clsx(
				"text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ",
				`bg-${color}-700 hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`,
				className
			)}
			onClick={handleClick}
		>
			{ label }
		</button>
	);
}

export default ButtonComponent;