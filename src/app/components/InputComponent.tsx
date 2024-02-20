import clsx from "clsx";
import { InputProps } from "../props";

const InputComponent: React.FC<InputProps> = ({ type, name, id, color, className, disabled, onChange, placeholder, value }) => {
	return (
		<input 
			type={type} 
			name={name}
			id={id}
			onChange={onChange} 
			className={clsx(
				"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
				`focus:ring-${color}-500 focus:border-${color}-500, dark:focus:border-${color}-500 dark:focus:ring-${color}-500`,
				className
			)}
			disabled={disabled}
			placeholder={placeholder}
			value={value}
		/>

	);
}

export default InputComponent;